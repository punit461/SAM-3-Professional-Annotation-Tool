"""
SAM3 Model Wrapper - Provides unified interface for SAM3 segmentation
"""
import io
import os
import sys
import traceback
import numpy as np
from typing import Dict, List, Optional, Tuple, Any
from PIL import Image

# Read GPU index from environment variable, default to "0"
gpu_index = os.getenv("SAM3_GPU_INDEX", "0")
os.environ["CUDA_VISIBLE_DEVICES"] = gpu_index
print(f"[SAM3] Using GPU index: {gpu_index}")

# Project paths
BACKEND_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PROJECT_ROOT = os.path.dirname(BACKEND_DIR)
SAM3_REPO_ROOT = os.path.join(BACKEND_DIR, 'sam3')
DEFAULT_MODELS_DIR = os.path.join(PROJECT_ROOT, 'models')
LEGACY_MODELS_DIR = os.path.join(BACKEND_DIR, 'app', 'sam3')


def _resolve_existing_path(raw_path: Optional[str], base_dirs: List[str]) -> Optional[str]:
    if not raw_path:
        return None
    candidate = raw_path.strip()
    if not candidate:
        return None

    expanded = os.path.expanduser(os.path.expandvars(candidate))
    if os.path.isabs(expanded) and os.path.exists(expanded):
        return expanded

    for base in base_dirs:
        joined = os.path.abspath(os.path.join(base, expanded))
        if os.path.exists(joined):
            return joined

    return expanded if os.path.isabs(expanded) else None

# SAM3 imports (prefer installed package; fallback to local repo path)
SAM3_AVAILABLE = None
build_sam3_image_model = None
Sam3Processor = None

def _ensure_sam3_imported() -> bool:
    global SAM3_AVAILABLE, build_sam3_image_model, Sam3Processor

    if SAM3_AVAILABLE is True:
        return True
    if SAM3_AVAILABLE is False:
        return False

    try:
        from sam3.model_builder import build_sam3_image_model as _build_sam3_image_model
        from sam3.model.sam3_image_processor import Sam3Processor as _Sam3Processor
        build_sam3_image_model = _build_sam3_image_model
        Sam3Processor = _Sam3Processor
        SAM3_AVAILABLE = True
        print("SAM3 loaded successfully from installed package")
        return True
    except Exception:
        if SAM3_REPO_ROOT not in sys.path:
            sys.path.insert(0, SAM3_REPO_ROOT)
        try:
            from sam3.model_builder import build_sam3_image_model as _build_sam3_image_model
            from sam3.model.sam3_image_processor import Sam3Processor as _Sam3Processor
            build_sam3_image_model = _build_sam3_image_model
            Sam3Processor = _Sam3Processor
            SAM3_AVAILABLE = True
            print(f"SAM3 loaded successfully from local repo: {SAM3_REPO_ROOT}")
            return True
        except Exception as import_error:
            SAM3_AVAILABLE = False
            print(f"SAM3 import unavailable: {import_error}")
            return False


class SAM3Wrapper:
    """Wrapper class for SAM3 model operations"""
    
    def __init__(self, device: str = "cuda"):
        self.device = device
        self.model = None
        self.processor = None
        self.image_states: Dict[str, Any] = {}
        self.images: Dict[str, Image.Image] = {}
        self.sam3_available = True
        
        # Store low_res_masks (logits) for mask refinement
        # Key: image_id, Value: low_res_mask tensor from previous prediction
        self.mask_logits: Dict[str, Any] = {}
        
        # Limit cached image states to avoid unbounded GPU memory growth
        self.max_cached_images = 3  # Keep only the most recent image states
        self._image_access_order: List[str] = []  # LRU order tracking
        self.eager_load = os.getenv("SAM3_EAGER_LOAD", "0").lower() in {"1", "true", "yes", "on"}
        
        if self.sam3_available:
            if not _ensure_sam3_imported():
                self.sam3_available = False
            elif self.eager_load:
                self._load_model()

    def _ensure_model_loaded(self):
        if self.sam3_available and (self.model is None or self.processor is None):
            if not _ensure_sam3_imported():
                self.sam3_available = False
                return
            self._load_model()
    
    def _load_model(self):
        """Load SAM3 model"""
        if not self.sam3_available:
            return
        if not _ensure_sam3_imported():
            self.sam3_available = False
            return
        if build_sam3_image_model is None or Sam3Processor is None:
            print("Failed to load SAM3 model: SAM3 builder/processor import is unavailable")
            self.sam3_available = False
            return
            
        try:
            import torch
            device = "cuda" if torch.cuda.is_available() else "cpu"
            
            # Support local checkpoint paths (env variable or default locations)
            # Priority: ENV variable > local default path > HuggingFace
            checkpoint_path = os.getenv("SAM3_CHECKPOINT_PATH", None)
            checkpoint_path = _resolve_existing_path(
                checkpoint_path,
                [os.getcwd(), BACKEND_DIR, PROJECT_ROOT],
            )
            
            # If no env variable, try default local paths
            if not checkpoint_path:
                model_dir = os.getenv("SAM3_MODEL_DIR", DEFAULT_MODELS_DIR)
                # Try multiple possible locations
                possible_paths = [
                    os.path.join(model_dir, 'sam3.pt'),
                    os.path.join(DEFAULT_MODELS_DIR, 'sam3.pt'),
                    os.path.join(LEGACY_MODELS_DIR, 'sam3.pt'),
                ]
                for path in possible_paths:
                    if os.path.exists(path):
                        checkpoint_path = path
                        print(f"Found local checkpoint at: {checkpoint_path}")
                        break
            
            # Determine whether to load from HuggingFace
            load_from_hf = checkpoint_path is None or checkpoint_path == ""
            
            if checkpoint_path:
                if os.path.exists(checkpoint_path):
                    print(f"Loading SAM3 model from local checkpoint: {checkpoint_path}")
                else:
                    print(f"WARNING: Checkpoint path specified but file not found: {checkpoint_path}")
                    print("Falling back to HuggingFace...")
                    checkpoint_path = None
                    load_from_hf = True
            else:
                print("Loading SAM3 model from HuggingFace...")

            bpe_path = _resolve_existing_path(
                os.getenv("SAM3_BPE_PATH", "") or None,
                [os.getcwd(), BACKEND_DIR, PROJECT_ROOT],
            )
            if not bpe_path:
                bpe_candidates = [
                    os.path.join(SAM3_REPO_ROOT, 'sam3', 'assets', 'bpe_simple_vocab_16e6.txt.gz'),
                    os.path.join(BACKEND_DIR, 'sam3', 'sam3', 'assets', 'bpe_simple_vocab_16e6.txt.gz'),
                ]
                for candidate in bpe_candidates:
                    if os.path.exists(candidate):
                        bpe_path = candidate
                        print(f"Using local SAM3 BPE path: {bpe_path}")
                        break
            if not bpe_path:
                print("WARNING: Could not resolve local BPE vocab file; SAM3 may fail if pkg resources are unavailable")
            
            self.model = build_sam3_image_model(
                bpe_path=bpe_path,
                device=device,
                eval_mode=True,
                enable_inst_interactivity=True,  # Enable point-based interaction
                checkpoint_path=checkpoint_path if checkpoint_path else None,
                load_from_HF=load_from_hf
            )
            self.processor = Sam3Processor(self.model, device=device)
            print(f"SAM3 model loaded successfully on {device}")
        except Exception as e:
            print(f"Failed to load SAM3 model: {e}")
            traceback.print_exc()
            self.sam3_available = False
    
    def _cleanup_old_images(self, keep_image_id: str = None):
        """Clean old image states to release GPU memory (LRU strategy)."""
        if len(self._image_access_order) <= self.max_cached_images:
            return
        
        # Number of images to remove
        num_to_remove = len(self._image_access_order) - self.max_cached_images
        images_to_remove = self._image_access_order[:num_to_remove]
        
        for img_id in images_to_remove:
            # Do not remove the currently active image
            if keep_image_id and img_id == keep_image_id:
                continue
                
            # Clean GPU tensor state
            if img_id in self.image_states:
                state = self.image_states[img_id]
                # Try to release GPU tensors in state
                if isinstance(state, dict):
                    for key, value in state.items():
                        if hasattr(value, 'cpu'):
                            # Release tensor reference
                            del state[key]
                del self.image_states[img_id]
                print(f"[_cleanup_old_images] Removed image state: {img_id}")
            
            # Clean mask logits
            if img_id in self.mask_logits:
                del self.mask_logits[img_id]
            
            # Clean PIL image (CPU memory)
            if img_id in self.images:
                del self.images[img_id]
            
            # Remove from access order
            if img_id in self._image_access_order:
                self._image_access_order.remove(img_id)
        
        # Force garbage collection to release GPU memory
        if self.sam3_available:
            try:
                import torch
                import gc
                gc.collect()
                torch.cuda.empty_cache()
                print(f"[_cleanup_old_images] GPU cache cleared, keeping {len(self.image_states)} images")
            except Exception as e:
                print(f"[_cleanup_old_images] Failed to clear GPU cache: {e}")
    
    def _update_access_order(self, image_id: str):
        """Update image access order (LRU)."""
        if image_id in self._image_access_order:
            self._image_access_order.remove(image_id)
        self._image_access_order.append(image_id)
    
    def register_image(self, image_id: str, image: Image.Image) -> bool:
        """Register an image without GPU encoding (lazy loading)
        
        This only stores the PIL image in CPU memory.
        GPU encoding will be done lazily when the user actually tries to segment.
        """
        self.images[image_id] = image
        print(f"[register_image] Stored image {image_id} in CPU memory (size={image.width}x{image.height})")
        return True
    
    def _ensure_image_encoded(self, image_id: str) -> bool:
        """Ensure the image is encoded on GPU (lazy encoding)
        
        If the image is registered but not encoded, encode it now.
        Returns True if the image is ready for segmentation.
        """
        self._ensure_model_loaded()

        if image_id not in self.images:
            return False
        
        # Already encoded?
        if image_id in self.image_states:
            return True
        
        # Need to encode now
        image = self.images[image_id]
        print(f"[_ensure_image_encoded] Lazy encoding image {image_id}...")
        
        # Update LRU order
        self._update_access_order(image_id)
        
        # Clean old images to release GPU memory
        self._cleanup_old_images(keep_image_id=image_id)
        
        if self.sam3_available and self.processor:
            state = self.processor.set_image(image)
            self.image_states[image_id] = state
            print(f"[_ensure_image_encoded] Image {image_id} encoded on GPU")
        else:
            # Mock state for development
            self.image_states[image_id] = {
                "width": image.width,
                "height": image.height
            }
        
        return True
    
    def set_image(self, image_id: str, image: Image.Image) -> bool:
        """Set image for processing (immediate GPU encoding)
        
        This is kept for backward compatibility.
        For CVAT loading, use register_image() instead.
        """
        self._ensure_model_loaded()

        # Update LRU order
        self._update_access_order(image_id)
        
        # Clean old images to release GPU memory
        self._cleanup_old_images(keep_image_id=image_id)
        
        self.images[image_id] = image
        
        if self.sam3_available and self.processor:
            state = self.processor.set_image(image)
            self.image_states[image_id] = state
        else:
            # Mock state for development
            self.image_states[image_id] = {
                "width": image.width,
                "height": image.height
            }
        
        return True
    
    def segment_with_text(
        self, 
        image_id: str, 
        prompt: str,
        confidence_threshold: float = 0.5
    ) -> List[Dict]:
        """Segment image using text prompt"""
        # Lazy encoding: ensure image is encoded
        if not self._ensure_image_encoded(image_id):
            raise ValueError(f"Image {image_id} not found. Please upload first.")
        
        # Update LRU access order
        self._update_access_order(image_id)
        
        if self.sam3_available and self.processor:
            state = self.image_states[image_id].copy()
            self.processor.set_confidence_threshold(confidence_threshold)
            result = self.processor.set_text_prompt(prompt, state)
            return self._process_results(result, image_id)
        else:
            # Mock result for development
            return self._generate_mock_results(image_id)
    
    def segment_with_points(
        self,
        image_id: str,
        points: List[Tuple[float, float, int]],  # [(x, y, label), ...]
        confidence_threshold: float = 0.5,
        reset_mask: bool = False  # Whether to start fresh without using previous mask
    ) -> List[Dict]:
        """Segment image using point prompts
        
        Uses SAM3's inst_interactive_predictor (SAM2-style API) for point-based segmentation
        Points format: [(x_pixel, y_pixel, label), ...] where label=1 is positive, label=0 is negative
        
        When multiple points are provided, all points are used together to refine a single mask.
        The mask_input (logits from previous prediction) is used for iterative refinement,
        similar to ISAT's approach.
        """
        # Lazy encoding: ensure image is encoded
        if not self._ensure_image_encoded(image_id):
            raise ValueError(f"Image {image_id} not found. Please upload first.")
        
        # Update LRU access order
        self._update_access_order(image_id)
        
        if self.sam3_available and self.processor:
            import torch
            import numpy as np
            
            image = self.images[image_id]
            w, h = image.width, image.height
            
            print(f"[segment_with_points] Processing {len(points)} points for image {image_id}, size=({w}x{h})")
            
            # Reset mask logits if requested (start of new annotation)
            if reset_mask and image_id in self.mask_logits:
                del self.mask_logits[image_id]
                print(f"[segment_with_points] Reset mask logits for image {image_id}")
            
            # Check if inst_interactive_predictor is available
            if self.processor.model.inst_interactive_predictor is None:
                print("[segment_with_points] inst_interactive_predictor not available, falling back to geometric prompt")
                return self._segment_with_points_geometric(image_id, points, confidence_threshold)
            
            # Use SAM2-style point prediction API
            state = self.image_states[image_id]
            
            # Prepare point coordinates and labels (SAM2 style - pixel coordinates)
            # SAM2/SAM3 expects Nx2 array for point_coords
            point_coords = np.array([[x, y] for x, y, _ in points], dtype=np.float32)
            point_labels = np.array([label for _, _, label in points], dtype=np.int32)
            
            print(f"[segment_with_points] Point coords (pixels): {point_coords}")
            print(f"[segment_with_points] Point labels: {point_labels}")
            
            # Check if we have previous mask logits for refinement
            mask_input = None
            if image_id in self.mask_logits and len(points) > 1:
                mask_input = self.mask_logits[image_id]
                print(f"[segment_with_points] Using previous mask logits for refinement, shape: {mask_input.shape}")
            
            try:
                # Build prediction kwargs
                predict_kwargs = {
                    "inference_state": state,
                    "point_coords": point_coords,
                    "point_labels": point_labels,
                    "normalize_coords": True,  # We're providing pixel coordinates, let SAM normalize them
                    "multimask_output": False,  # Always return single best mask
                }
                
                # Add mask_input for refinement if available
                if mask_input is not None:
                    predict_kwargs["mask_input"] = mask_input
                
                # Use predict_inst method which wraps inst_interactive_predictor
                masks, iou_scores, low_res_masks = self.processor.model.predict_inst(**predict_kwargs)
                
                print(f"[segment_with_points] Got {len(masks)} masks, scores: {iou_scores}")
                
                # Store the mask's logits for next refinement
                if len(low_res_masks) > 0:
                    self.mask_logits[image_id] = low_res_masks[0:1]  # Keep first (only) mask
                    print(f"[segment_with_points] Stored mask logits, shape: {low_res_masks[0:1].shape}")
                
                # Process the single returned mask
                results = []
                if len(masks) > 0:
                    mask = masks[0]
                    score = float(iou_scores[0]) if len(iou_scores) > 0 else 0.0
                    
                    # Convert to binary mask
                    binary_mask = (mask > 0).astype(np.uint8)
                    
                    # Calculate bounding box
                    ys, xs = np.where(binary_mask > 0)
                    if len(xs) > 0 and len(ys) > 0:
                        x1, x2 = int(xs.min()), int(xs.max())
                        y1, y2 = int(ys.min()), int(ys.max())
                    box = [x1, y1, x2, y2]
                    
                    # Convert to RLE
                    rle = self._mask_to_rle(binary_mask)
                    area = int(np.sum(binary_mask))
                    
                    results.append({
                        "mask_rle": rle,
                        "box": box,
                        "score": score,
                        "area": area
                    })
                
                print(f"[segment_with_points] Returning best mask with score: {score:.3f}")
                return results
                
            except Exception as e:
                print(f"[segment_with_points] predict_inst failed: {e}")
                import traceback
                traceback.print_exc()
                # Fall back to geometric prompt
                return self._segment_with_points_geometric(image_id, points, confidence_threshold)
        else:
            # Mock mode: always return a result for development
            print("[segment_with_points] Using mock mode")
            return self._generate_mock_results_at_point(image_id, points)
    
    def reset_mask_state(self, image_id: str) -> bool:
        """Reset the mask refinement state for an image
        
        Call this when starting a new annotation to ensure fresh predictions
        without influence from previous mask logits.
        """
        if image_id in self.mask_logits:
            del self.mask_logits[image_id]
            print(f"[reset_mask_state] Cleared mask logits for image {image_id}")
            return True
        return False
    
    def _segment_with_points_geometric(
        self,
        image_id: str,
        points: List[Tuple[float, float, int]],
        confidence_threshold: float = 0.5
    ) -> List[Dict]:
        """Fallback: use geometric prompt with boxes around points"""
        import torch
        
        state = self.image_states[image_id].copy()
        self.processor.set_confidence_threshold(confidence_threshold)
        
        image = self.images[image_id]
        w, h = image.width, image.height
        
        # Prepare for geometric prompts
        if "backbone_out" not in state:
            raise ValueError("Image state not properly initialized")
        
        if "language_features" not in state["backbone_out"]:
            dummy_text_outputs = self.processor.model.backbone.forward_text(
                ["visual"], device=self.processor.device
            )
            state["backbone_out"].update(dummy_text_outputs)
        
        if "geometric_prompt" not in state:
            state["geometric_prompt"] = self.processor.model._get_dummy_prompt()
        
        # Convert points to small boxes
        for x, y, label in points:
            # Create a small box around the point (5% of image size)
            box_w = 0.05
            box_h = 0.05
            cx, cy = x / w, y / h
            box = [cx, cy, box_w, box_h]
            print(f"[_segment_with_points_geometric] Point ({x}, {y}) label={label} -> box={box}")
            state = self.processor.add_geometric_prompt(
                box=box,
                label=bool(label),
                state=state
            )
        
        return self._process_results(state, image_id)
    
    def segment_with_box(
        self,
        image_id: str,
        box: Tuple[float, float, float, float],  # (x1, y1, x2, y2)
        label: bool = True,
        confidence_threshold: float = 0.5
    ) -> List[Dict]:
        """Segment image using box prompt"""
        # Lazy encoding: ensure image is encoded
        if not self._ensure_image_encoded(image_id):
            raise ValueError(f"Image {image_id} not found. Please upload first.")
        
        # Update LRU access order
        self._update_access_order(image_id)
        
        if self.sam3_available and self.processor:
            state = self.image_states[image_id].copy()
            self.processor.set_confidence_threshold(confidence_threshold)
            
            # Convert box to center format
            image = self.images[image_id]
            w, h = image.width, image.height
            x1, y1, x2, y2 = box
            
            cx = ((x1 + x2) / 2) / w
            cy = ((y1 + y2) / 2) / h
            bw = abs(x2 - x1) / w
            bh = abs(y2 - y1) / h
            
            box_normalized = [cx, cy, bw, bh]
            state = self.processor.add_geometric_prompt(
                box=box_normalized,
                label=label,
                state=state
            )
            
            return self._process_results(state, image_id)
        else:
            return self._generate_mock_results(image_id)
    
    def segment_with_template(
        self,
        image_id: str,
        template_image_id: str,
        template_box: Tuple[float, float, float, float],
        confidence_threshold: float = 0.5
    ) -> List[Dict]:
        """Segment image using visual prompt (bounding box as exemplar)
        
        Uses SAM3's add_geometric_prompt to find objects at the specified location.
        
        IMPORTANT: This only works for SAME IMAGE detection.
        For cross-image detection, the box coordinates would be meaningless
        since SAM3's geometric prompt specifies WHERE to look, not WHAT to look for.
        
        Args:
            image_id: Target image to segment
            template_image_id: Source image with template (must be same as image_id)
            template_box: Bounding box of the exemplar object (x1, y1, x2, y2 in pixels)
            confidence_threshold: Minimum confidence score for results
        """
        # Lazy encoding: ensure image is encoded
        if not self._ensure_image_encoded(image_id):
            raise ValueError(f"Image {image_id} not found.")
        if template_image_id not in self.images:
            raise ValueError(f"Template image {template_image_id} not found.")
        
        # Update LRU access order
        self._update_access_order(image_id)
        
        # Check if this is cross-image detection
        if image_id != template_image_id:
            raise ValueError(
                "Cross-image template detection is not supported. SAM3 visual prompts are location-based "
                "and cannot find similar objects across different images. Use the text tool for cross-image matching."
            )
        
        if self.sam3_available and self.processor:
            # Use fresh copy of state for template detection
            state = self.image_states[image_id].copy()
            self.processor.set_confidence_threshold(confidence_threshold)
            
            # Get image dimensions for normalization (same image, so use template image)
            template_image = self.images[template_image_id]
            w, h = template_image.width, template_image.height
            
            x1, y1, x2, y2 = template_box
            
            # Convert to center format and normalize to [0, 1]
            # Box format: [center_x, center_y, width, height] normalized
            cx = ((x1 + x2) / 2) / w
            cy = ((y1 + y2) / 2) / h
            bw = abs(x2 - x1) / w
            bh = abs(y2 - y1) / h
            
            box_normalized = [cx, cy, bw, bh]
            print(f"[segment_with_template] Using geometric prompt (visual exemplar)")
            print(f"  Box pixels: ({x1:.1f}, {y1:.1f}, {x2:.1f}, {y2:.1f})")
            print(f"  Box normalized: {box_normalized}")
            print(f"  Image size: {w}x{h}")
            
            state = self.processor.add_geometric_prompt(
                box=box_normalized,
                label=True,
                state=state
            )
            
            results = self._process_results(state, image_id)
            print(f"[segment_with_template] Found {len(results)} results")
            
            return results
        else:
            return self._generate_mock_results(image_id)
    
    def _process_results(self, state: Dict, image_id: str) -> List[Dict]:
        """Process SAM3 results into standard format"""
        results = []
        
        if "masks" in state and "boxes" in state and "scores" in state:
            masks = state["masks"]
            boxes = state["boxes"]
            scores = state["scores"]
            
            for i in range(len(masks)):
                # Convert to float32 before numpy (avoids unsupported BFloat16 conversion)
                mask = masks[i].float().cpu().numpy().squeeze().astype(np.uint8)
                box = boxes[i].float().cpu().numpy().tolist()
                score = float(scores[i].float().cpu().item())
                
                # Convert mask to RLE format
                rle = self._mask_to_rle(mask)
                area = int(np.sum(mask))
                
                results.append({
                    "mask_rle": rle,
                    "box": box,
                    "score": score,
                    "area": area
                })
        
        return results
    
    def _generate_mock_results(self, image_id: str) -> List[Dict]:
        """Generate mock results for development"""
        if image_id not in self.images:
            return []
        
        image = self.images[image_id]
        w, h = image.width, image.height
        
        # Generate a mock circular mask in the center
        mock_mask = np.zeros((h, w), dtype=np.uint8)
        center_y, center_x = h // 2, w // 2
        radius = min(w, h) // 4
        y, x = np.ogrid[:h, :w]
        mask_area = (x - center_x) ** 2 + (y - center_y) ** 2 <= radius ** 2
        mock_mask[mask_area] = 1
        
        rle = self._mask_to_rle(mock_mask)
        area = int(np.sum(mock_mask))
        
        return [{
            "mask_rle": rle,
            "box": [center_x - radius, center_y - radius, 
                   center_x + radius, center_y + radius],
            "score": 0.95,
            "area": area
        }]
    
    def _generate_mock_results_at_point(self, image_id: str, points: List[Tuple[float, float, int]]) -> List[Dict]:
        """Generate mock results at specific point positions for development"""
        if image_id not in self.images or not points:
            return []
        
        image = self.images[image_id]
        w, h = image.width, image.height
        
        # Use the first positive point as the center
        positive_points = [(x, y) for x, y, label in points if label == 1]
        if not positive_points:
            # If no positive points, use first point anyway
            center_x, center_y = int(points[0][0]), int(points[0][1])
        else:
            center_x, center_y = int(positive_points[0][0]), int(positive_points[0][1])
        
        # Generate a mock circular mask around the clicked point
        mock_mask = np.zeros((h, w), dtype=np.uint8)
        radius = min(w, h) // 8  # Smaller radius for point-based selection
        y_grid, x_grid = np.ogrid[:h, :w]
        mask_area = (x_grid - center_x) ** 2 + (y_grid - center_y) ** 2 <= radius ** 2
        mock_mask[mask_area] = 1
        
        rle = self._mask_to_rle(mock_mask)
        area = int(np.sum(mock_mask))
        
        box_x1 = max(0, center_x - radius)
        box_y1 = max(0, center_y - radius)
        box_x2 = min(w, center_x + radius)
        box_y2 = min(h, center_y + radius)
        
        return [{
            "mask_rle": rle,
            "box": [box_x1, box_y1, box_x2, box_y2],
            "score": 0.90,
            "area": area
        }]
    
    def _mask_to_rle(self, mask: np.ndarray) -> Dict:
        """Convert binary mask to RLE format (COCO standard)
        
        Returns counts as alternating run lengths: [bg_run, fg_run, bg_run, fg_run, ...]
        First run is always background (0), even if length is 0.
        """
        pixels = mask.flatten().astype(np.uint8)
        
        # Find value change indices
        diff = np.diff(pixels)
        change_indices = np.where(diff != 0)[0] + 1
        
        # Build run lengths
        if len(change_indices) == 0:
            # All pixels have the same value
            if pixels[0] == 0:
                counts = [len(pixels)]
            else:
                counts = [0, len(pixels)]
        else:
            # Add start and end positions
            positions = np.concatenate([[0], change_indices, [len(pixels)]])
            counts = np.diff(positions).tolist()
            
            # If first pixel is foreground, prefix a 0-length background run
            if pixels[0] == 1:
                counts = [0] + counts
        
        return {
            "counts": counts,
            "size": list(mask.shape)
        }
    
    def reset_prompts(self, image_id: str):
        """Reset all prompts for an image"""
        if self.sam3_available and self.processor and image_id in self.image_states:
            self.processor.reset_all_prompts(self.image_states[image_id])
    
    def get_image_info(self, image_id: str) -> Optional[Dict]:
        """Get image information"""
        if image_id not in self.images:
            return None
        
        image = self.images[image_id]
        return {
            "id": image_id,
            "width": image.width,
            "height": image.height
        }


# Global model instance
sam3_model = SAM3Wrapper()
