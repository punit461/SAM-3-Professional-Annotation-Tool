import { useRef, useEffect, useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import { Box, Typography } from '@mui/material';
import { useAnnotationStore } from '../store/annotationStore';
import { segmentWithPoints, segmentWithBox, segmentWithTemplate } from '../services/api';
import type { RLEMask } from '../types';

export interface CanvasHandle {
  zoomIn: () => void;
  zoomOut: () => void;
  zoomFit: () => void;
  zoom100: () => void;
}

interface AnnotationCanvasProps {
  onSegmentRequest?: () => void;
  onScaleChange?: (scale: number) => void;
}

interface ControlPoint {
  x: number;
  y: number;
  index: number;
}

/**
 * Decode RLE to binary mask
 * Backend uses standard COCO RLE format: counts are alternating run lengths (0s, 1s, 0s, 1s, ...)
 */
function decodeRLE(rle: RLEMask): Uint8Array {
  const [height, width] = rle.size;
  const mask = new Uint8Array(height * width);
  
  let idx = 0;
  let value = 0; // Start with 0 (first run is background)
  
  for (const count of rle.counts) {
    const endIdx = Math.min(idx + count, mask.length);
    for (let i = idx; i < endIdx; i++) {
      mask[i] = value;
    }
    idx = endIdx;
    value = 1 - value; // Alternate between 0 and 1
  }
  
  return mask;
}

/**
 * Extract contour points from binary mask (using contour tracing algorithm)
 */
function extractContourPoints(mask: Uint8Array, width: number, height: number): { x: number; y: number }[] {
  const visited = new Set<number>();
  const contour: { x: number; y: number }[] = [];
  
  // Find the first boundary point as starting point
  let startX = -1, startY = -1;
  outer: for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (mask[idx] === 1) {
        if (x === 0 || mask[idx - 1] === 0) {
          startX = x;
          startY = y;
          break outer;
        }
      }
    }
  }
  
  if (startX === -1) return contour;
  
  // 8-directional neighbors (clockwise)
  const dx = [1, 1, 0, -1, -1, -1, 0, 1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  
  let x = startX, y = startY;
  let dir = 0; // Initial search direction
  
  do {
    const key = y * width + x;
    if (!visited.has(key)) {
      contour.push({ x, y });
      visited.add(key);
    }
    
    // Start search from reverse of previous direction +1 (ensure clockwise tracking)
    let found = false;
    const startDir = (dir + 5) % 8; // Reverse +1
    
    for (let i = 0; i < 8; i++) {
      const d = (startDir + i) % 8;
      const nx = x + dx[d];
      const ny = y + dy[d];
      
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nidx = ny * width + nx;
        if (mask[nidx] === 1) {
          // Check if it's an edge point
          let isEdge = false;
          for (let j = 0; j < 8; j++) {
            const ex = nx + dx[j];
            const ey = ny + dy[j];
            if (ex < 0 || ex >= width || ey < 0 || ey >= height || mask[ey * width + ex] === 0) {
              isEdge = true;
              break;
            }
          }
          
          if (isEdge) {
            x = nx;
            y = ny;
            dir = d;
            found = true;
            break;
          }
        }
      }
    }
    
    if (!found) break;
    
  } while (x !== startX || y !== startY);
  
  return contour;
}

/**
 * Calculate perpendicular distance from point to line segment
 */
function perpendicularDistance(
  point: { x: number; y: number },
  lineStart: { x: number; y: number },
  lineEnd: { x: number; y: number }
): number {
  const dx = lineEnd.x - lineStart.x;
  const dy = lineEnd.y - lineStart.y;
  
  if (dx === 0 && dy === 0) {
    // Line segment degenerates to a point
    return Math.sqrt((point.x - lineStart.x) ** 2 + (point.y - lineStart.y) ** 2);
  }
  
  const t = Math.max(0, Math.min(1, 
    ((point.x - lineStart.x) * dx + (point.y - lineStart.y) * dy) / (dx * dx + dy * dy)
  ));
  
  const projX = lineStart.x + t * dx;
  const projY = lineStart.y + t * dy;
  
  return Math.sqrt((point.x - projX) ** 2 + (point.y - projY) ** 2);
}

/**
 * Douglas-Peucker algorithm to simplify contour
 * Preserve important turning points, remove less important points
 */
function douglasPeucker(
  points: { x: number; y: number }[],
  epsilon: number
): { x: number; y: number }[] {
  if (points.length <= 2) return points;
  
  // Find the point farthest from the first-last line
  let maxDist = 0;
  let maxIndex = 0;
  
  const first = points[0];
  const last = points[points.length - 1];
  
  for (let i = 1; i < points.length - 1; i++) {
    const dist = perpendicularDistance(points[i], first, last);
    if (dist > maxDist) {
      maxDist = dist;
      maxIndex = i;
    }
  }
  
  if (maxDist > epsilon) {
    const left = douglasPeucker(points.slice(0, maxIndex + 1), epsilon);
    const right = douglasPeucker(points.slice(maxIndex), epsilon);
    
    // Merge results (remove duplicate middle point)
    return [...left.slice(0, -1), ...right];
  } else {
    // Keep only first and last
    return [first, last];
  }
}

/**
 * Simplify contour points (using Douglas-Peucker algorithm)
 */
function simplifyContour(points: { x: number; y: number }[], maxPoints: number = 20): { x: number; y: number }[] {
  if (points.length <= maxPoints) return points;
  
  // Calculate appropriate epsilon (based on contour size)
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const p of points) {
    minX = Math.min(minX, p.x);
    maxX = Math.max(maxX, p.x);
    minY = Math.min(minY, p.y);
    maxY = Math.max(maxY, p.y);
  }
  
  const diagonal = Math.sqrt((maxX - minX) ** 2 + (maxY - minY) ** 2);
  
  // Dynamically adjust epsilon until the target number of points is reached
  let epsilon = diagonal * 0.01; // Initial threshold 
  let result = douglasPeucker(points, epsilon);
  
  // If too many points, increase epsilon; if too few, decrease epsilon
  let iterations = 0;
  while (result.length > maxPoints && iterations < 20) {
    epsilon *= 1.5;
    result = douglasPeucker(points, epsilon);
    iterations++;
  }
  
  // If too few points, decrease epsilon and recalculate
  while (result.length < Math.min(8, maxPoints) && epsilon > 1 && iterations < 30) {
    epsilon *= 0.7;
    result = douglasPeucker(points, epsilon);
    iterations++;
  }
  
  return result;
}

/**
 * Create mask from polygon points
 */
function polygonToMask(points: { x: number; y: number }[], width: number, height: number): Uint8Array {
  const mask = new Uint8Array(width * height);
  
  if (points.length < 3) return mask;
  
  // Use scanline algorithm to fill polygon
  for (let y = 0; y < height; y++) {
    const intersections: number[] = [];
    
    for (let i = 0; i < points.length; i++) {
      const p1 = points[i];
      const p2 = points[(i + 1) % points.length];
      
      if ((p1.y <= y && p2.y > y) || (p2.y <= y && p1.y > y)) {
        const x = p1.x + (y - p1.y) / (p2.y - p1.y) * (p2.x - p1.x);
        intersections.push(x);
      }
    }
    
    intersections.sort((a, b) => a - b);
    
    for (let i = 0; i < intersections.length; i += 2) {
      if (i + 1 < intersections.length) {
        const x1 = Math.max(0, Math.floor(intersections[i]));
        const x2 = Math.min(width - 1, Math.ceil(intersections[i + 1]));
        for (let x = x1; x <= x2; x++) {
          mask[y * width + x] = 1;
        }
      }
    }
  }
  
  return mask;
}

/**
 * Encode mask to RLE
 */
function maskToRLE(mask: Uint8Array, width: number, height: number): RLEMask {
  const counts: number[] = [];
  let currentValue = 0;
  let runLength = 0;
  
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === currentValue) {
      runLength++;
    } else {
      counts.push(runLength);
      currentValue = 1 - currentValue;
      runLength = 1;
    }
  }
  counts.push(runLength);
  
  // Ensure first run is background
  if (mask[0] === 1) {
    counts.unshift(0);
  }
  
  return {
    counts,
    size: [height, width]
  };
}

/** Merge (union) two masks: result[i] = a[i] OR b[i] */
function mergeMasks(a: Uint8Array, b: Uint8Array): Uint8Array {
  const result = new Uint8Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = (a[i] || b[i]) ? 1 : 0;
  }
  return result;
}

/** Subtract mask b from mask a: result[i] = a[i] AND NOT b[i] */
function subtractMasks(a: Uint8Array, b: Uint8Array): Uint8Array {
  const result = new Uint8Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = (a[i] && !b[i]) ? 1 : 0;
  }
  return result;
}

/** Compute bounding box [x, y, w, h] from a mask */
function computeBboxFromMask(mask: Uint8Array, width: number, height: number): [number, number, number, number] {
  let minX = width, minY = height, maxX = 0, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (mask[y * width + x] === 1) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < minX) return [0, 0, 0, 0]; // empty mask
  return [minX, minY, maxX - minX + 1, maxY - minY + 1];
}

function createMaskFromStroke(points: { x: number; y: number }[], width: number, height: number, thickness: number): Uint8Array {
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = width;
  tempCanvas.height = height;
  const tempCtx = tempCanvas.getContext('2d');
  if (!tempCtx || points.length < 2) return new Uint8Array(width * height);

  tempCtx.clearRect(0, 0, width, height);
  tempCtx.strokeStyle = '#ffffff';
  tempCtx.lineCap = 'round';
  tempCtx.lineJoin = 'round';
  tempCtx.lineWidth = thickness;
  tempCtx.beginPath();
  tempCtx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    tempCtx.lineTo(points[i].x, points[i].y);
  }
  tempCtx.stroke();

  const imageData = tempCtx.getImageData(0, 0, width, height).data;
  const mask = new Uint8Array(width * height);
  for (let i = 0; i < mask.length; i++) {
    mask[i] = imageData[i * 4 + 3] > 0 ? 1 : 0;
  }
  return mask;
}

function createMaskFromLine(
  start: { x: number; y: number },
  end: { x: number; y: number },
  width: number,
  height: number,
  thickness: number
): Uint8Array {
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = width;
  tempCanvas.height = height;
  const tempCtx = tempCanvas.getContext('2d');
  if (!tempCtx) return new Uint8Array(width * height);

  tempCtx.clearRect(0, 0, width, height);
  tempCtx.strokeStyle = '#ffffff';
  tempCtx.lineCap = 'round';
  tempCtx.lineJoin = 'round';
  tempCtx.lineWidth = thickness;
  tempCtx.beginPath();
  tempCtx.moveTo(start.x, start.y);
  tempCtx.lineTo(end.x, end.y);
  tempCtx.stroke();

  const imageData = tempCtx.getImageData(0, 0, width, height).data;
  const mask = new Uint8Array(width * height);
  for (let i = 0; i < mask.length; i++) {
    mask[i] = imageData[i * 4 + 3] > 0 ? 1 : 0;
  }
  return mask;
}

function applyEnhancement(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  brightness: number,
  contrast: number,
  mode: 'none' | 'histogram' | 'auto'
) {
  if (brightness === 0 && contrast === 0 && mode === 'none') return;

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  if (mode === 'histogram' || mode === 'auto') {
    const hist = new Array<number>(256).fill(0);
    const luminance = new Uint8Array(canvas.width * canvas.height);

    for (let i = 0; i < luminance.length; i++) {
      const r = data[i * 4];
      const g = data[i * 4 + 1];
      const b = data[i * 4 + 2];
      const y = Math.max(0, Math.min(255, Math.round(0.299 * r + 0.587 * g + 0.114 * b)));
      luminance[i] = y;
      hist[y]++;
    }

    const cdf = new Array<number>(256).fill(0);
    cdf[0] = hist[0];
    for (let i = 1; i < 256; i++) cdf[i] = cdf[i - 1] + hist[i];
    const total = luminance.length;
    const cdfMin = cdf.find(v => v > 0) || 0;

    for (let i = 0; i < luminance.length; i++) {
      const y = luminance[i];
      const mapped = Math.round(((cdf[y] - cdfMin) / Math.max(1, total - cdfMin)) * 255);
      const scale = y === 0 ? 0 : mapped / y;
      data[i * 4] = Math.max(0, Math.min(255, Math.round(data[i * 4] * scale)));
      data[i * 4 + 1] = Math.max(0, Math.min(255, Math.round(data[i * 4 + 1] * scale)));
      data[i * 4 + 2] = Math.max(0, Math.min(255, Math.round(data[i * 4 + 2] * scale)));
    }
  }

  const effectiveContrast = mode === 'auto' ? contrast + 10 : contrast;
  const factor = (259 * (effectiveContrast + 255)) / (255 * (259 - effectiveContrast));
  const brightnessOffset = mode === 'auto' ? brightness + 5 : brightness;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.max(0, Math.min(255, factor * (data[i] - 128) + 128 + brightnessOffset));
    data[i + 1] = Math.max(0, Math.min(255, factor * (data[i + 1] - 128) + 128 + brightnessOffset));
    data[i + 2] = Math.max(0, Math.min(255, factor * (data[i + 2] - 128) + 128 + brightnessOffset));
  }

  ctx.putImageData(imageData, 0, 0);
}

/**
 * Draw mask to Canvas
 */
function drawMask(
  ctx: CanvasRenderingContext2D,
  mask: Uint8Array,
  width: number,
  height: number,
  color: string,
  alpha: number = 0.4
) {
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;
  
  // Parse color
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  
  for (let i = 0; i < mask.length; i++) {
    if (mask[i]) {
      const idx = i * 4;
      data[idx] = r;
      data[idx + 1] = g;
      data[idx + 2] = b;
      data[idx + 3] = Math.floor(alpha * 255);
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

export const AnnotationCanvas = forwardRef<CanvasHandle, AnnotationCanvasProps>(function AnnotationCanvas({ onSegmentRequest: _onSegmentRequest, onScaleChange }, ref) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const polygonOverlayRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const lastImageIdRef = useRef<string | null>(null);
  
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDrawingBox, setIsDrawingBox] = useState(false);
  const [boxStart, setBoxStart] = useState({ x: 0, y: 0 });
  const [isBrushing, setIsBrushing] = useState(false);
  const [brushStroke, setBrushStroke] = useState<{ x: number; y: number }[]>([]);
  const [lineStartPoint, setLineStartPoint] = useState<{ x: number; y: number } | null>(null);
  const [lineEndPoint, setLineEndPoint] = useState<{ x: number; y: number } | null>(null);
  const [isPolygonDrawing, setIsPolygonDrawing] = useState(false);
  const [lastPolygonDrawPoint, setLastPolygonDrawPoint] = useState<{ x: number; y: number } | null>(null);
  
  // Mouse position (for paste preview)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  
  // Control point editing state
  const [editingAnnotationId, setEditingAnnotationId] = useState<string | null>(null);
  const [controlPoints, setControlPoints] = useState<ControlPoint[]>([]);
  const [draggingPointIndex, setDraggingPointIndex] = useState<number | null>(null);
  // Hover point position on edge (for showing add control point hint)
  const [hoverEdgePoint, setHoverEdgePoint] = useState<{ x: number; y: number } | null>(null);
  
  const {
    currentImage,
    annotations,
    currentTool,
    selectedAnnotationIds,
    tempPoints,
    tempBox,
    previewMask,
    templateImage,
    templateBox,
    isPasting,
    copiedAnnotations,
    polygonPoints,
    setTempBox,
    addTempPoint,
    clearTempPoints,
    setPreviewMask,
    setTemplateImage,
    setTemplateBox,
    addPolygonPoint,
    clearPolygonPoints,
    updateAnnotation,
    selectAnnotation,
    deselectAll,
    addAnnotation,
    addAnnotations,
    confirmPaste,
    cancelPaste,
    categories,
    currentCategoryId,
    drawMode,
    confidenceThreshold,
    brushSize,
    lineThickness,
    brightness,
    contrast,
    enhancementMode,
    setLoading,
    setError
  } = useAnnotationStore();

  // Expose zoom functions via ref
  useImperativeHandle(ref, () => ({
    zoomIn() {
      setScale(s => Math.min(5, s * 1.2));
    },
    zoomOut() {
      setScale(s => Math.max(0.1, s / 1.2));
    },
    zoomFit() {
      if (!currentImage || !containerRef.current) return;
      const c = containerRef.current;
      const fitScale = Math.min(c.clientWidth / currentImage.width, c.clientHeight / currentImage.height);
      setScale(fitScale);
      setOffset({
        x: (c.clientWidth - currentImage.width * fitScale) / 2,
        y: (c.clientHeight - currentImage.height * fitScale) / 2
      });
    },
    zoom100() {
      if (!currentImage || !containerRef.current) return;
      const c = containerRef.current;
      setScale(1);
      setOffset({
        x: (c.clientWidth - currentImage.width) / 2,
        y: (c.clientHeight - currentImage.height) / 2
      });
    }
  }), [currentImage]);

  // Notify parent of scale changes
  useEffect(() => {
    onScaleChange?.(scale);
  }, [scale, onScaleChange]);

  // Convert screen coordinates to image coordinates
  const screenToImage = useCallback((screenX: number, screenY: number): { x: number; y: number } => {
    if (!containerRef.current || !currentImage) return { x: 0, y: 0 };
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (screenX - rect.left - offset.x) / scale;
    const y = (screenY - rect.top - offset.y) / scale;
    
    return {
      x: Math.max(0, Math.min(x, currentImage.width)),
      y: Math.max(0, Math.min(y, currentImage.height))
    };
  }, [scale, offset, currentImage]);

  // Draw main canvas (image)
  const drawMainCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !currentImage) {
      console.log('[drawMainCanvas] Missing required elements:', { canvas: !!canvas, ctx: !!ctx, currentImage: !!currentImage });
      return;
    }

    console.log('[drawMainCanvas] currentImage:', {
      id: currentImage.id,
      fileName: currentImage.fileName,
      width: currentImage.width,
      height: currentImage.height,
      urlType: typeof currentImage.url,
      urlLength: currentImage.url?.length || 0,
      urlStart: currentImage.url?.substring(0, 60) || '(empty)',
      hasFile: !!currentImage.file
    });

    // If the same image is already loaded, draw cached version directly
    if (
      imageRef.current &&
      lastImageIdRef.current === currentImage.id &&
      imageRef.current.complete &&
      imageRef.current.naturalWidth > 0
    ) {
      console.log('[drawMainCanvas] Using cached image');
      canvas.width = currentImage.width;
      canvas.height = currentImage.height;
      ctx.drawImage(imageRef.current, 0, 0);
      applyEnhancement(ctx, canvas, brightness, contrast, enhancementMode);
      return;
    }

    // Helper function: load image from File using createImageBitmap (supports BMP and other formats)
    const loadImageFromFile = async (file: File): Promise<void> => {
      try {
        console.log('[loadImageFromFile] Using createImageBitmap to load:', file.name);
        const imageBitmap = await createImageBitmap(file);
        console.log('[loadImageFromFile] Success:', imageBitmap.width, 'x', imageBitmap.height);
        
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        ctx.drawImage(imageBitmap, 0, 0);
        applyEnhancement(ctx, canvas, brightness, contrast, enhancementMode);
        
        // Also update imageRef for subsequent drawing
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = imageBitmap.width;
        tempCanvas.height = imageBitmap.height;
        const tempCtx = tempCanvas.getContext('2d');
        if (tempCtx) {
          tempCtx.drawImage(imageBitmap, 0, 0);
          const dataUrl = tempCanvas.toDataURL('image/jpeg', 0.92);
          const img = new Image();
          img.onload = () => {
            imageRef.current = img;
            lastImageIdRef.current = currentImage.id;
          };
          img.src = dataUrl;
        }
        
        imageBitmap.close();
      } catch (err) {
        console.error('[loadImageFromFile] createImageBitmap failed:', err);
        throw err;
      }
    };

    // Helper function: load image to canvas (for data URL or regular URL)
    const loadImage = (src: string, isRetry = false) => {
      console.log('[loadImage] Loading image, src length:', src.length, 'start:', src.substring(0, 60));
      const img = new Image();
      // Only set crossOrigin for remote URLs
      if (/^https?:\/\//i.test(src)) {
        img.crossOrigin = 'anonymous';
      }
      
      img.onload = () => {
        console.log('[loadImage] Image loaded successfully:', img.naturalWidth, 'x', img.naturalHeight);
        imageRef.current = img;
        lastImageIdRef.current = currentImage.id;
        canvas.width = img.naturalWidth || currentImage.width;
        canvas.height = img.naturalHeight || currentImage.height;
        ctx.drawImage(img, 0, 0);
        applyEnhancement(ctx, canvas, brightness, contrast, enhancementMode);
      };
      
      img.onerror = async () => {
        console.error('[loadImage] img.onerror triggered, isRetry:', isRetry, 'hasFile:', !!currentImage.file);
        // If first failure and has file, try using createImageBitmap
        if (!isRetry && currentImage.file) {
          console.warn('[loadImage] Trying to load from File using createImageBitmap...');
          try {
            await loadImageFromFile(currentImage.file);
            return;
          } catch (err) {
            console.error('[loadImage] createImageBitmap also failed:', err);
          }
        }
        
        // Final failure, show error placeholder
        console.error('[loadImage] Final failure, src:', src.substring(0, 100));
        canvas.width = currentImage.width || 800;
        canvas.height = currentImage.height || 600;
        ctx.fillStyle = '#374151';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#9ca3af';
        ctx.font = '16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Image load failed', canvas.width / 2, canvas.height / 2);
      };
      
      img.src = src;
    };

    // Get image source
    let imgSrc = currentImage.url;
    
    // If URL is invalid, try creating from file
    if (!imgSrc || imgSrc === '') {
      if (currentImage.file) {
        loadImageFromFile(currentImage.file).catch(() => {
          canvas.width = currentImage.width || 800;
          canvas.height = currentImage.height || 600;
          ctx.fillStyle = '#374151';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = '#9ca3af';
          ctx.font = '16px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('Cannot read file', canvas.width / 2, canvas.height / 2);
        });
        return;
      } else {
        canvas.width = currentImage.width || 800;
        canvas.height = currentImage.height || 600;
        ctx.fillStyle = '#374151';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#9ca3af';
        ctx.font = '16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('No image source', canvas.width / 2, canvas.height / 2);
        return;
      }
    }

    loadImage(imgSrc);
  }, [currentImage, brightness, contrast, enhancementMode]);

  // Draw overlay (annotations, temporary drawing, etc.)
  const drawOverlay = useCallback(() => {
    const canvas = overlayRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !currentImage) return;

    canvas.width = currentImage.width;
    canvas.height = currentImage.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Only show annotations for current image
    const currentAnnotations = annotations.filter(ann => ann.imageId === currentImage.id);

    // Draw annotation masks
    currentAnnotations.forEach((ann) => {
      if (!ann.visible) return;
      
      try {
        const mask = decodeRLE(ann.segmentation);
        const [height, width] = ann.segmentation.size;
        
        // Create temporary canvas to draw mask
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = width;
        tempCanvas.height = height;
        const tempCtx = tempCanvas.getContext('2d');
        if (tempCtx) {
          drawMask(tempCtx, mask, width, height, ann.color, ann.selected ? 0.6 : 0.4);
          ctx.drawImage(tempCanvas, 0, 0);
        }
        
        // When selected, draw control points
        if (ann.selected && editingAnnotationId === ann.id && controlPoints.length > 0) {
          // Draw polygon outline (using contrasting color)
          ctx.beginPath();
          ctx.moveTo(controlPoints[0].x, controlPoints[0].y);
          for (let i = 1; i < controlPoints.length; i++) {
            ctx.lineTo(controlPoints[i].x, controlPoints[i].y);
          }
          ctx.closePath();
          // Use white outline + black inner line for better visibility
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 3;
          ctx.stroke();
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Draw control points (fixed visual size, not affected by zoom)
          controlPoints.forEach((point, idx) => {
            const isActive = draggingPointIndex === idx;
            // Divide by scale to keep points visually fixed size (reduced size)
            const pointRadius = (isActive ? 5 : 4) / scale;
            const shadowRadius = pointRadius + 1 / scale;
            const centerRadius = 1.5 / scale;
            const borderWidth = 1 / scale;
            
            // Outer circle (black shadow effect)
            ctx.beginPath();
            ctx.arc(point.x, point.y, shadowRadius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fill();
            
            // Main dot (bright color fill)
            ctx.beginPath();
            ctx.arc(point.x, point.y, pointRadius, 0, Math.PI * 2);
            ctx.fillStyle = isActive ? '#fbbf24' : '#ffffff';  // Yellow indicates dragging
            ctx.fill();
            
            // Inner circle border (dark color)
            ctx.strokeStyle = '#1f2937';
            ctx.lineWidth = borderWidth;
            ctx.stroke();
            
            // Center small dot (mark position)
            ctx.beginPath();
            ctx.arc(point.x, point.y, centerRadius, 0, Math.PI * 2);
            ctx.fillStyle = '#1f2937';
            ctx.fill();
          });
          
          // Draw hover hint on edge line (can double-click to add control point)
          if (hoverEdgePoint) {
            const hoverRadius = 4 / scale;
            const hoverShadowRadius = hoverRadius + 1 / scale;
            
            // Outer circle (shadow effect)
            ctx.beginPath();
            ctx.arc(hoverEdgePoint.x, hoverEdgePoint.y, hoverShadowRadius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fill();
            
            // Main dot (green indicates can add)
            ctx.beginPath();
            ctx.arc(hoverEdgePoint.x, hoverEdgePoint.y, hoverRadius, 0, Math.PI * 2);
            ctx.fillStyle = '#22c55e';  // Green
            ctx.fill();
            
            // Border
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1 / scale;
            ctx.stroke();
            
            // + symbol
            const plusSize = 2 / scale;
            ctx.beginPath();
            ctx.moveTo(hoverEdgePoint.x - plusSize, hoverEdgePoint.y);
            ctx.lineTo(hoverEdgePoint.x + plusSize, hoverEdgePoint.y);
            ctx.moveTo(hoverEdgePoint.x, hoverEdgePoint.y - plusSize);
            ctx.lineTo(hoverEdgePoint.x, hoverEdgePoint.y + plusSize);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1 / scale;
            ctx.stroke();
          }
        } else if (ann.selected) {
          // Show bounding box and edit hint
          ctx.strokeStyle = ann.color;
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          const [x, y, w, h] = ann.bbox;
          ctx.strokeRect(x, y, w, h);
          ctx.setLineDash([]);
        }
      } catch (e) {
        console.warn('Failed to draw annotation:', e);
      }
    });

    // Draw preview mask (real-time preview during point segmentation, semi-transparent gray)
    if (previewMask) {
      try {
        const mask = decodeRLE(previewMask.mask_rle);
        const [height, width] = previewMask.mask_rle.size;
        
        // Create temporary canvas to draw preview mask
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = width;
        tempCanvas.height = height;
        const tempCtx = tempCanvas.getContext('2d');
        if (tempCtx) {
          // Use gray to display preview mask
          drawMask(tempCtx, mask, width, height, '#71717a', 0.5);
          ctx.drawImage(tempCanvas, 0, 0);
        }
        
        // Draw bounding box of preview mask
        const [x1, y1, x2, y2] = previewMask.box;
        ctx.strokeStyle = '#71717a';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
        ctx.setLineDash([]);
        
        // Display score
        ctx.fillStyle = '#71717a';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(`Score: ${(previewMask.score * 100).toFixed(1)}%`, x1, y1 - 20);
      } catch (e) {
        console.warn('Failed to draw preview mask:', e);
      }
    }

    // Draw temporary points
    tempPoints.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = point.label === 1 ? '#22c55e' : '#ef4444';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw plus/minus sign
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(point.label === 1 ? '+' : '-', point.x, point.y);
    });

    // Draw temporary box selection
    if (tempBox) {
      // Template tool uses purple, box tool uses gray
      const isTemplate = currentTool === 'template';
      const fillColor = isTemplate ? 'rgba(168, 85, 247, 0.15)' : 'rgba(113, 113, 122, 0.15)';
      const strokeColor = isTemplate ? '#9333ea' : '#52525b';
      const cornerColor = isTemplate ? '#7c3aed' : '#3f3f46';
      
      // Draw semi-transparent fill
      ctx.fillStyle = fillColor;
      ctx.fillRect(
        tempBox.x1,
        tempBox.y1,
        tempBox.x2 - tempBox.x1,
        tempBox.y2 - tempBox.y1
      );
      
      // Draw prominent border
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 4]);
      ctx.strokeRect(
        tempBox.x1,
        tempBox.y1,
        tempBox.x2 - tempBox.x1,
        tempBox.y2 - tempBox.y1
      );
      ctx.setLineDash([]);
      
      // Draw corner markers
      const cornerSize = 12;
      ctx.strokeStyle = cornerColor;
      ctx.lineWidth = 4;
      ctx.setLineDash([]);
      
      // Top-left corner
      ctx.beginPath();
      ctx.moveTo(tempBox.x1, tempBox.y1 + cornerSize);
      ctx.lineTo(tempBox.x1, tempBox.y1);
      ctx.lineTo(tempBox.x1 + cornerSize, tempBox.y1);
      ctx.stroke();
      
      // Top-right corner
      ctx.beginPath();
      ctx.moveTo(tempBox.x2 - cornerSize, tempBox.y1);
      ctx.lineTo(tempBox.x2, tempBox.y1);
      ctx.lineTo(tempBox.x2, tempBox.y1 + cornerSize);
      ctx.stroke();
      
      // Bottom-left corner
      ctx.beginPath();
      ctx.moveTo(tempBox.x1, tempBox.y2 - cornerSize);
      ctx.lineTo(tempBox.x1, tempBox.y2);
      ctx.lineTo(tempBox.x1 + cornerSize, tempBox.y2);
      ctx.stroke();
      
      // Bottom-right corner
      ctx.beginPath();
      ctx.moveTo(tempBox.x2 - cornerSize, tempBox.y2);
      ctx.lineTo(tempBox.x2, tempBox.y2);
      ctx.lineTo(tempBox.x2, tempBox.y2 - cornerSize);
      ctx.stroke();
      
      // Template tool displays hint text
      if (isTemplate) {
        ctx.fillStyle = 'rgba(168, 85, 247, 0.9)';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Select template region', (tempBox.x1 + tempBox.x2) / 2, tempBox.y1 - 10);
      }
    }
    
    // If there's a saved template and current tool is template, show template indicator
    if (currentTool === 'template' && templateImage && templateBox && currentImage) {
      // If template is from current image, show template region on canvas
      if (templateImage.id === currentImage.id) {
        ctx.strokeStyle = '#10b981';  // Green
        ctx.lineWidth = 3;
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(
          templateBox.x1,
          templateBox.y1,
          templateBox.x2 - templateBox.x1,
          templateBox.y2 - templateBox.y1
        );
        ctx.setLineDash([]);
        
        // Display "Template Selected" label
        ctx.fillStyle = 'rgba(16, 185, 129, 0.9)';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('✓ Template Selected', (templateBox.x1 + templateBox.x2) / 2, templateBox.y1 - 8);
      }
    }
    
    // Draw paste preview (mask preview following mouse)
    if (isPasting && copiedAnnotations.length > 0 && mousePosition) {
      // Calculate center point from mask actual pixels (more accurate)
      let totalPixelX = 0;
      let totalPixelY = 0;
      let totalPixels = 0;
      
      copiedAnnotations.forEach(ann => {
        const mask = decodeRLE(ann.segmentation);
        const [maskHeight, maskWidth] = ann.segmentation.size;
        
        // Calculate centroid of all mask pixels (using row-major indexing)
        for (let y = 0; y < maskHeight; y++) {
          for (let x = 0; x < maskWidth; x++) {
            const idx = y * maskWidth + x;
            if (mask[idx] === 1) {
              totalPixelX += x;
              totalPixelY += y;
              totalPixels++;
            }
          }
        }
      });
      
      // Calculate mask centroid
      const origCenterX = totalPixels > 0 ? totalPixelX / totalPixels : 0;
      const origCenterY = totalPixels > 0 ? totalPixelY / totalPixels : 0;
      
      // Calculate offset: move centroid to mouse position
      const offsetX = mousePosition.x - origCenterX;
      const offsetY = mousePosition.y - origCenterY;
      
      // Draw each copied annotation preview
      copiedAnnotations.forEach((ann) => {
        try {
          const mask = decodeRLE(ann.segmentation);
          const [height, width] = ann.segmentation.size;
          
          // Create temporary canvas to draw mask
          const tempCanvas = document.createElement('canvas');
          tempCanvas.width = width;
          tempCanvas.height = height;
          const tempCtx = tempCanvas.getContext('2d');
          if (tempCtx) {
            // Use semi-transparent orange for paste preview
            drawMask(tempCtx, mask, width, height, '#f97316', 0.5);
          }
          
          // Draw entire mask canvas at offset position
          ctx.drawImage(tempCanvas, offsetX, offsetY);
          
          // Draw preview bounding box (also offset)
          const [x, y, w, h] = ann.bbox;
          ctx.strokeStyle = '#f97316';
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          ctx.strokeRect(x + offsetX, y + offsetY, w, h);
          ctx.setLineDash([]);
        } catch (e) {
          console.warn('Failed to draw paste preview:', e);
        }
      });
      
      // Display paste hint
      ctx.fillStyle = 'rgba(249, 115, 22, 0.9)';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText('Click to place / Right-click to cancel', mousePosition.x, mousePosition.y - 15);
      
      // Draw crosshair
      ctx.strokeStyle = '#f97316';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(mousePosition.x - 10, mousePosition.y);
      ctx.lineTo(mousePosition.x + 10, mousePosition.y);
      ctx.moveTo(mousePosition.x, mousePosition.y - 10);
      ctx.lineTo(mousePosition.x, mousePosition.y + 10);
      ctx.stroke();
    }
    
    // Polygon drawing is handled by drawPolygonOverlay on a separate screen-space canvas

    if (currentTool === 'brush' && brushStroke.length > 1) {
      ctx.beginPath();
      ctx.moveTo(brushStroke[0].x, brushStroke[0].y);
      for (let i = 1; i < brushStroke.length; i++) {
        ctx.lineTo(brushStroke[i].x, brushStroke[i].y);
      }
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.85)';
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }

    if (currentTool === 'line' && lineStartPoint && lineEndPoint) {
      ctx.beginPath();
      ctx.moveTo(lineStartPoint.x, lineStartPoint.y);
      ctx.lineTo(lineEndPoint.x, lineEndPoint.y);
      ctx.strokeStyle = 'rgba(249, 115, 22, 0.95)';
      ctx.lineWidth = lineThickness;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }, [currentImage, annotations, tempPoints, tempBox, previewMask, controlPoints, editingAnnotationId, draggingPointIndex, currentTool, templateImage, templateBox, isPasting, copiedAnnotations, mousePosition, scale, hoverEdgePoint, brushStroke, lineStartPoint, lineEndPoint, brushSize, lineThickness]);

  // Draw polygon overlay on a separate screen-space canvas (no CSS transform blur)
  const drawPolygonOverlay = useCallback(() => {
    const canvas = polygonOverlayRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Size canvas to container (screen pixels)
    const w = container.clientWidth;
    const h = container.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    if (currentTool !== 'polygon' || polygonPoints.length === 0) return;

    // Convert image-space point to screen-space
    const toScreen = (p: { x: number; y: number }) => ({
      x: p.x * scale + offset.x,
      y: p.y * scale + offset.y,
    });

    const pts = polygonPoints.map(toScreen);

    // Draw committed polygon edges
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) {
      ctx.lineTo(pts[i].x, pts[i].y);
    }
    ctx.strokeStyle = '#2196f3';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.setLineDash([]);
    ctx.stroke();

    // Draw preview segment to cursor and closure hint
    if (mousePosition) {
      const cursorScreen = toScreen(mousePosition);
      const lastPt = pts[pts.length - 1];

      ctx.beginPath();
      ctx.moveTo(lastPt.x, lastPt.y);
      ctx.lineTo(cursorScreen.x, cursorScreen.y);
      ctx.strokeStyle = '#2196f3';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 5]);
      ctx.stroke();

      if (pts.length >= 3) {
        ctx.beginPath();
        ctx.moveTo(cursorScreen.x, cursorScreen.y);
        ctx.lineTo(pts[0].x, pts[0].y);
        ctx.strokeStyle = '#2196f3';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    // Draw start vertex
    ctx.beginPath();
    ctx.arc(pts[0].x, pts[0].y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#2196f3';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }, [currentTool, polygonPoints, mousePosition, scale, offset]);

  // When annotation is selected, load control points
  useEffect(() => {
    if (selectedAnnotationIds.length === 1) {
      const selectedAnn = annotations.find(ann => ann.id === selectedAnnotationIds[0]);
      if (selectedAnn && selectedAnn.id !== editingAnnotationId) {
        // Extract contour points from mask
        const mask = decodeRLE(selectedAnn.segmentation);
        const [height, width] = selectedAnn.segmentation.size;
        const contour = extractContourPoints(mask, width, height);
        const simplified = simplifyContour(contour, 16);
        
        setControlPoints(simplified.map((p, i) => ({ ...p, index: i })));
        setEditingAnnotationId(selectedAnn.id);
      }
    } else {
      setControlPoints([]);
      setEditingAnnotationId(null);
    }
  }, [selectedAnnotationIds, annotations, editingAnnotationId]);

  // Check if clicked on control point
  const findControlPointAtPosition = useCallback((x: number, y: number): number | null => {
    const hitRadius = 10 / scale; // Click radius, considering zoom
    for (let i = 0; i < controlPoints.length; i++) {
      const dx = controlPoints[i].x - x;
      const dy = controlPoints[i].y - y;
      if (Math.sqrt(dx * dx + dy * dy) < hitRadius) {
        return i;
      }
    }
    return null;
  }, [controlPoints, scale]);

  // Calculate distance from point to line segment, and return nearest point position
  const pointToSegmentDistance = useCallback((
    px: number, py: number,
    x1: number, y1: number,
    x2: number, y2: number
  ): { distance: number; point: { x: number; y: number } } => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lengthSquared = dx * dx + dy * dy;
    
    if (lengthSquared === 0) {
      // Line segment length is 0, return start point
      return {
        distance: Math.sqrt((px - x1) ** 2 + (py - y1) ** 2),
        point: { x: x1, y: y1 }
      };
    }
    
    // Calculate parameter t of projection point (limit to 0~1)
    let t = ((px - x1) * dx + (py - y1) * dy) / lengthSquared;
    t = Math.max(0, Math.min(1, t));
    
    // Calculate nearest point
    const nearestX = x1 + t * dx;
    const nearestY = y1 + t * dy;
    
    return {
      distance: Math.sqrt((px - nearestX) ** 2 + (py - nearestY) ** 2),
      point: { x: nearestX, y: nearestY }
    };
  }, []);

  // Find nearest line segment on control point boundary, return insert position and coordinates
  const findNearestEdgePosition = useCallback((x: number, y: number): { 
    insertIndex: number; 
    point: { x: number; y: number };
    distance: number;
  } | null => {
    if (controlPoints.length < 2) return null;
    
    let minDistance = Infinity;
    let insertIndex = -1;
    let nearestPoint = { x: 0, y: 0 };
    
    // Check all edges (including the closing edge from last point to first point)
    for (let i = 0; i < controlPoints.length; i++) {
      const p1 = controlPoints[i];
      const p2 = controlPoints[(i + 1) % controlPoints.length];
      
      const result = pointToSegmentDistance(x, y, p1.x, p1.y, p2.x, p2.y);
      
      if (result.distance < minDistance) {
        minDistance = result.distance;
        insertIndex = i + 1; // Insert between p1 and p2
        nearestPoint = result.point;
      }
    }
    
    if (insertIndex === -1) return null;
    
    return {
      insertIndex: insertIndex === controlPoints.length ? controlPoints.length : insertIndex,
      point: nearestPoint,
      distance: minDistance
    };
  }, [controlPoints, pointToSegmentDistance]);

  // Add control point on edge
  const addControlPointOnEdge = useCallback((x: number, y: number): boolean => {
    if (!editingAnnotationId || controlPoints.length < 3) return false;
    
    const edgeHitRadius = 15 / scale; // Edge click detection radius
    const result = findNearestEdgePosition(x, y);
    
    if (!result || result.distance > edgeHitRadius) return false;
    
    // Create new control points array, insert new point at specified position
    const newPoints: ControlPoint[] = [
      ...controlPoints.slice(0, result.insertIndex),
      { x: result.point.x, y: result.point.y, index: result.insertIndex },
      ...controlPoints.slice(result.insertIndex)
    ];
    
    // Reindex
    const reindexedPoints = newPoints.map((p, i) => ({ ...p, index: i }));
    setControlPoints(reindexedPoints);
    
    return true;
  }, [editingAnnotationId, controlPoints, scale, findNearestEdgePosition]);

  // Check if click position is inside an annotation's mask
  const findAnnotationAtPosition = useCallback((x: number, y: number): string | null => {
    if (!currentImage) return null;
    
    const currentAnnotations = annotations.filter(ann => ann.imageId === currentImage.id && ann.visible);
    
    // Check from back to front (later drawn are on top)
    for (let i = currentAnnotations.length - 1; i >= 0; i--) {
      const ann = currentAnnotations[i];
      const [height, width] = ann.segmentation.size;
      
      // Check if inside bbox (quick filter)
      const [bx, by, bw, bh] = ann.bbox;
      if (x < bx || x > bx + bw || y < by || y > by + bh) {
        continue;
      }
      
      // Decode mask and check the pixel
      const mask = decodeRLE(ann.segmentation);
      const px = Math.floor(x);
      const py = Math.floor(y);
      
      if (px >= 0 && px < width && py >= 0 && py < height) {
        const idx = py * width + px;
        if (mask[idx] === 1) {
          return ann.id;
        }
      }
    }
    
    return null;
  }, [currentImage, annotations]);

  // Add temporary point and update preview mask (don't create annotation)
  const addPointAndUpdatePreview = useCallback(async (x: number, y: number, label: 0 | 1) => {
    console.log('[addPointAndUpdatePreview] Add point, x:', x, 'y:', y, 'label:', label, '(', label === 1 ? 'positive' : 'negative', ')');
    
    if (!currentImage || currentImage.isLocalOnly) {
      if (currentImage?.isLocalOnly) {
        setError('Local images cannot be segmented with SAM3. Please make sure the backend connection is working.');
      }
      return;
    }

    if (!currentCategoryId) {
      setError('Please select or create a category first.');
      return;
    }

    // Add current point to accumulated list
    const newPoint = { x, y, label };
    const allPoints = [...tempPoints, newPoint];
    
    // Determine if this is the first point (need to reset mask state)
    const isFirstPoint = tempPoints.length === 0;
    
    // First add point to UI display
    addTempPoint(newPoint);
    
    // Check if there are positive points
    const hasPositive = allPoints.some(p => p.label === 1);
    if (!hasPositive) {
      // If only negative points, only accumulate without calling API (need positive points first for segmentation)
      setError('Please left-click the object you want to segment first');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      console.log('[addPointAndUpdatePreview] Call API to update preview:', {
        imageId: currentImage.id,
        points: allPoints,
        positiveCount: allPoints.filter(p => p.label === 1).length,
        negativeCount: allPoints.filter(p => p.label === 0).length,
        isFirstPoint,
        resetMask: isFirstPoint
      });

      // First point: resetMask=true to start new annotation, subsequent points: resetMask=false for refinement
      const results = await segmentWithPoints(
        currentImage.id,
        allPoints,
        confidenceThreshold,
        isFirstPoint  // resetMask: reset mask state on first point
      );

      console.log('[addPointAndUpdatePreview] Results:', results.length, 'segmentations');

      if (results.length > 0) {
        // Use highest-score result as preview
        const best = results.reduce((a, b) => a.score > b.score ? a : b);
        setPreviewMask({
          mask_rle: best.mask_rle,
          box: best.box,
          score: best.score,
          area: best.area
        });
      } else {
        console.warn('[addPointAndUpdatePreview] No segmentation results');
        setPreviewMask(null);
      }
    } catch (err) {
      console.error('[addPointAndUpdatePreview] Error:', err);
      setError(err instanceof Error ? err.message : 'Segmentation failed');
    } finally {
      setLoading(false);
    }
  }, [currentImage, currentCategoryId, tempPoints, confidenceThreshold, setLoading, setError, addTempPoint, setPreviewMask]);

  // Update preview mask after box selection complete
  const updateBoxPreview = useCallback(async (box: { x1: number; y1: number; x2: number; y2: number }) => {
    console.log('[updateBoxPreview] Box selection complete, box:', box);
    
    if (!currentImage || currentImage.isLocalOnly) {
      if (currentImage?.isLocalOnly) {
        setError('Local images cannot be segmented with SAM3. Please make sure the backend connection is working.');
      }
      return;
    }

    if (!currentCategoryId) {
      setError('Please select or create a category first.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const results = await segmentWithBox(
        currentImage.id,
        box,
        true,  // positive label
        confidenceThreshold
      );

      console.log('[updateBoxPreview] Results:', results.length, 'segmentations');

      if (results.length > 0) {
        // Use highest-score result as preview
        const best = results.reduce((a, b) => a.score > b.score ? a : b);
        setPreviewMask({
          mask_rle: best.mask_rle,
          box: best.box,
          score: best.score,
          area: best.area
        });
        // Clear box selection, keep preview mask
        setTempBox(null);
      } else {
        console.warn('[updateBoxPreview] No segmentation results');
        setPreviewMask(null);
        setTempBox(null);
      }
    } catch (err) {
      console.error('[updateBoxPreview] Error:', err);
      setError(err instanceof Error ? err.message : 'Segmentation failed');
      setTempBox(null);
    } finally {
      setLoading(false);
    }
  }, [currentImage, currentCategoryId, confidenceThreshold, setLoading, setError, setPreviewMask, setTempBox]);

  // Save template: store current box selection as a template
  const saveTemplate = useCallback((box: { x1: number; y1: number; x2: number; y2: number }) => {
    console.log('[saveTemplate] Save template:', box);
    
    if (!currentImage) {
      setError('Please select an image first.');
      return;
    }

    // Store template image and selection box
    setTemplateImage(currentImage);
    setTemplateBox(box);
    setTempBox(null);
    
    console.log('[saveTemplate] Template saved, imageId:', currentImage.id);
  }, [currentImage, setTemplateImage, setTemplateBox, setTempBox, setError]);

  // Apply template: find objects similar to the template in current image (batch detection)
  const applyTemplate = useCallback(async () => {
    console.log('[applyTemplate] Apply template');
    
    if (!currentImage || currentImage.isLocalOnly) {
      setError('Please select an uploaded image first.');
      return;
    }

    if (!templateImage || !templateBox) {
      setError('Please select a template first (draw a box around an example object in the image).');
      return;
    }

    if (!currentCategoryId) {
      setError('Please select or create a category first.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      console.log('[applyTemplate] Call API:', {
        imageId: currentImage.id,
        templateImageId: templateImage.id,
        templateBox
      });

      const results = await segmentWithTemplate(
        currentImage.id,
        templateImage.id,
        templateBox,
        confidenceThreshold
      );

      console.log('[applyTemplate] Results:', results.length, 'segmentations');

      if (results.length > 0) {
        // Get current category information
        const category = categories.find(c => c.id === currentCategoryId);
        const categoryName = category?.name || 'object';

        // Convert all results to annotations and add in batch
        const annotationsToAdd = results.map(result => ({
          imageId: currentImage.id,
          categoryId: currentCategoryId,
          categoryName,
          segmentation: result.mask_rle,
          bbox: result.box as [number, number, number, number],
          score: result.score,
          area: result.area
        }));

        addAnnotations(annotationsToAdd);
        
        // Clear preview
        setPreviewMask(null);
        
        console.log(`[applyTemplate] Added ${results.length} annotations`);
      } else {
        setError('No similar objects were found.');
        setPreviewMask(null);
      }
    } catch (err) {
      console.error('[applyTemplate] Error:', err);
      setError(err instanceof Error ? err.message : 'Template matching failed.');
    } finally {
      setLoading(false);
    }
  }, [currentImage, templateImage, templateBox, currentCategoryId, categories, confidenceThreshold, setLoading, setError, setPreviewMask, addAnnotations]);

  // Clear template
  const clearTemplate = useCallback(() => {
    setTemplateImage(null);
    setTemplateBox(null);
    console.log('[clearTemplate] Template cleared');
  }, [setTemplateImage, setTemplateBox]);

  // Confirm segmentation: convert preview mask into a formal annotation
  const confirmSegmentation = useCallback(() => {
    console.log('[confirmSegmentation] Confirm segmentation');
    
    if (!currentImage || !previewMask) {
      setError('No segmentation result available to confirm.');
      return;
    }

    if (!currentCategoryId) {
      setError('Please select or create a category first.');
      return;
    }

    const category = categories.find(c => c.id === currentCategoryId);
    if (!category) {
      setError('Selected category not found.');
      return;
    }

    // Create annotation
    addAnnotation({
      imageId: currentImage.id,
      categoryId: category.id,
      categoryName: category.name,
      segmentation: previewMask.mask_rle,
      bbox: previewMask.box,
      area: previewMask.area,
      score: previewMask.score
    });

    // Clear temporary state
    clearTempPoints();
    setError(null);
    
    console.log('[confirmSegmentation] Annotation created successfully');
  }, [currentImage, previewMask, currentCategoryId, categories, addAnnotation, clearTempPoints, setError]);

  // Confirm polygon: convert manually drawn polygon into annotation
  const confirmPolygon = useCallback(() => {
    console.log('[confirmPolygon] Confirm polygon, vertex count:', polygonPoints.length);
    
    if (!currentImage) {
      setError('Please select an image first.');
      return;
    }

    if (polygonPoints.length < 3) {
      setError('A polygon requires at least 3 vertices.');
      return;
    }

    if (!currentCategoryId) {
      setError('Please select or create a category first.');
      return;
    }

    const category = categories.find(c => c.id === currentCategoryId);
    if (!category) {
      setError('Selected category not found.');
      return;
    }

    // Convert polygon to mask
    const width = currentImage.width;
    const height = currentImage.height;
    const drawnMask = polygonToMask(polygonPoints, width, height);

    // Find target annotation: prefer explicitly selected, then topmost overlapping
    let targetAnn = selectedAnnotationIds.length === 1
      ? annotations.find(a => a.id === selectedAnnotationIds[0] && a.imageId === currentImage.id) ?? null
      : null;

    if (!targetAnn && drawMode === 'remove') {
      // In remove mode, find the topmost annotation whose mask overlaps the drawn polygon
      const imageAnns = annotations.filter(a => a.imageId === currentImage.id && a.visible);
      for (let i = imageAnns.length - 1; i >= 0; i--) {
        const ann = imageAnns[i];
        const existingMask = decodeRLE(ann.segmentation);
        // Check if any pixel overlaps
        let overlaps = false;
        for (let j = 0; j < drawnMask.length; j++) {
          if (drawnMask[j] === 1 && existingMask[j] === 1) { overlaps = true; break; }
        }
        if (overlaps) { targetAnn = ann; break; }
      }
    }

    if (!targetAnn && drawMode === 'add') {
      // In add mode with no selection, find the topmost same-category annotation that overlaps
      const imageAnns = annotations.filter(a => a.imageId === currentImage.id && a.visible && a.categoryId === category.id);
      for (let i = imageAnns.length - 1; i >= 0; i--) {
        const ann = imageAnns[i];
        const existingMask = decodeRLE(ann.segmentation);
        let overlaps = false;
        for (let j = 0; j < drawnMask.length; j++) {
          if (drawnMask[j] === 1 && existingMask[j] === 1) { overlaps = true; break; }
        }
        if (overlaps) { targetAnn = ann; break; }
      }
    }

    if (targetAnn && drawMode === 'remove') {
      // Subtract polygon area from the target annotation
      const existingMask = decodeRLE(targetAnn.segmentation);
      const resultMask = subtractMasks(existingMask, drawnMask);
      const area = resultMask.reduce((sum, val) => sum + val, 0);
      if (area > 0) {
        const rle = maskToRLE(resultMask, width, height);
        const bbox = computeBboxFromMask(resultMask, width, height);
        updateAnnotation(targetAnn.id, { segmentation: rle, bbox, area });
      }
    } else if (targetAnn && drawMode === 'add') {
      // Merge polygon area into the target annotation
      const existingMask = decodeRLE(targetAnn.segmentation);
      const resultMask = mergeMasks(existingMask, drawnMask);
      const area = resultMask.reduce((sum, val) => sum + val, 0);
      const rle = maskToRLE(resultMask, width, height);
      const bbox = computeBboxFromMask(resultMask, width, height);
      updateAnnotation(targetAnn.id, { segmentation: rle, bbox, area });
    } else {
      // No selected annotation — create a new one
      const rle = maskToRLE(drawnMask, width, height);
      const area = drawnMask.reduce((sum, val) => sum + val, 0);
      const bbox = computeBboxFromMask(drawnMask, width, height);
      addAnnotation({
        imageId: currentImage.id,
        categoryId: category.id,
        categoryName: category.name,
        segmentation: rle,
        bbox,
        area,
        score: 1.0
      });
    }

    // Clear polygon vertices
    clearPolygonPoints();
    setError(null);
    
    console.log('[confirmPolygon] Polygon annotation created successfully');
  }, [currentImage, polygonPoints, currentCategoryId, categories, addAnnotation, clearPolygonPoints, setError, drawMode, selectedAnnotationIds, annotations, updateAnnotation]);

  // Handle mouse click
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!currentImage) return;
    
    // Middle mouse button (wheel press): drag/pan canvas in any tool mode
    if (e.button === 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
      return;
    }
    
    const { x, y } = screenToImage(e.clientX, e.clientY);
    
    // If in paste mode, click to confirm paste position
    if (isPasting) {
      if (e.button === 0) {  // Left click to confirm
        confirmPaste(x, y);
      } else if (e.button === 2) {  // Right click to cancel
        cancelPaste();
      }
      return;
    }
    
    // Polygon tool: highest priority handling to avoid unnecessary computation
    if (currentTool === 'polygon') {
      if (e.button === 0) {
        // Check whether start point is clicked (close polygon)
        if (polygonPoints.length >= 3) {
          const firstPoint = polygonPoints[0];
          const dist = Math.sqrt((x - firstPoint.x) ** 2 + (y - firstPoint.y) ** 2);
          const closeThreshold = 15 / scale;  // Adjust closure threshold based on zoom
          if (dist < closeThreshold) {
            // Clicked start point: close polygon and create annotation
            confirmPolygon();
            return;
          }
        }
        // Add vertex and start optional press-drag freehand continuation
        addPolygonPoint({ x, y });
        setIsPolygonDrawing(true);
        setLastPolygonDrawPoint({ x, y });
      }
      return;
    }
    
    // First check whether a control point is clicked (drag existing control point)
    if (controlPoints.length > 0) {
      const pointIndex = findControlPointAtPosition(x, y);
      if (pointIndex !== null) {
        setDraggingPointIndex(pointIndex);
        return;
      }
      
      // If no control point was clicked, check whether border line was clicked (add control point)
      // Double-click border line to add control point
      if (e.detail === 2 && addControlPointOnEdge(x, y)) {
        return;
      }
    }
    
    if (currentTool === 'hand') {
      setIsDragging(true);
      setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    } else if (currentTool === 'brush') {
      if (e.button === 0) {
        setIsBrushing(true);
        setBrushStroke([{ x, y }]);
      }
    } else if (currentTool === 'line') {
      if (e.button === 0) {
        setLineStartPoint({ x, y });
        setLineEndPoint({ x, y });
      }
    } else if (currentTool === 'pointer') {
      // Check whether a mask was clicked
      const clickedAnnotationId = findAnnotationAtPosition(x, y);
      if (clickedAnnotationId) {
        // Support Ctrl/Cmd/Shift multi-select
        selectAnnotation(clickedAnnotationId, e.ctrlKey || e.metaKey || e.shiftKey);
        return;
      } else {
        // Click empty space to clear selection
        if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
          deselectAll();
        }
      }
      
      setIsDragging(true);
      setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    } else if (currentTool === 'add-point' || currentTool === 'remove-point') {
      // Point segmentation tool: left click = positive (1), update preview
      // Right click is handled by handleContextMenu
      if (e.button === 0) {
        addPointAndUpdatePreview(x, y, 1);  // 1 = positive
      }
    } else if (currentTool === 'box' || currentTool === 'template') {
      // Both box and template tools use box selection
      setIsDrawingBox(true);
      setBoxStart({ x, y });
      setTempBox({ x1: x, y1: y, x2: x, y2: y });
    }
  }, [currentImage, currentTool, screenToImage, offset, setTempBox, controlPoints, findControlPointAtPosition, findAnnotationAtPosition, selectAnnotation, deselectAll, addPointAndUpdatePreview, isPasting, confirmPaste, cancelPaste, polygonPoints, scale, addPolygonPoint, confirmPolygon, addControlPointOnEdge]);

  // Handle right-click menu (prevent default behavior and process negative points)
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    // Prevent default context menu
    e.preventDefault();
    
    console.log('[handleContextMenu] Right-click, currentTool:', currentTool);
    
    // If using the point segmentation tool, right-click = negative point, update preview
    if ((currentTool === 'add-point' || currentTool === 'remove-point') && currentImage) {
      const { x, y } = screenToImage(e.clientX, e.clientY);
      console.log('[handleContextMenu] Adding negative point, x:', x, 'y:', y);
      addPointAndUpdatePreview(x, y, 0);  // 0 = negative
    }
  }, [currentTool, currentImage, screenToImage, addPointAndUpdatePreview]);

  // Keyboard handling (Enter confirms segmentation/applies template/confirms polygon, Escape cancels)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Point segmentation, box, template, and polygon tools all support confirm/cancel
      const isPointTool = currentTool === 'add-point' || currentTool === 'remove-point';
      const isBoxTool = currentTool === 'box';
      const isTemplateTool = currentTool === 'template';
      const isPolygonTool = currentTool === 'polygon';
      
      if (!isPointTool && !isBoxTool && !isTemplateTool && !isPolygonTool) return;
      
      if (e.key === 'Enter') {
        e.preventDefault();
        if (isPolygonTool && polygonPoints.length >= 3) {
            // Polygon tool: confirm polygon
            console.log('[handleKeyDown] Enter pressed, confirming polygon');
          confirmPolygon();
        } else if (isTemplateTool && templateImage && templateBox && !previewMask) {
          // Template tool with existing template but no preview: check whether it is the same image
          if (currentImage && currentImage.id === templateImage.id) {
            console.log('[handleKeyDown] Enter pressed, applying template (same image)');
            applyTemplate();
          } else {
            console.log('[handleKeyDown] Cross-image templates are not supported');
            setError('The template feature only supports matching within the same image. For cross-image use, please use the "text" tool.');
          }
        } else if (previewMask) {
          // Preview mask exists: confirm segmentation
          console.log('[handleKeyDown] Enter pressed, confirming segmentation');
          confirmSegmentation();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        console.log('[handleKeyDown] Escape pressed — clearing temporary UI state');
        setIsDrawingBox(false);
        setIsDragging(false);
        setMousePosition(null);
        setDraggingPointIndex(null);
        setHoverEdgePoint(null);
        if (isPolygonTool) {
          clearPolygonPoints();
        } else {
          clearTempPoints();
          setPreviewMask(null);
          if (isTemplateTool) {
            clearTemplate();
          }
        }
        setError(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentTool, confirmSegmentation, confirmPolygon, clearTempPoints, clearPolygonPoints, setPreviewMask, setError, templateImage, templateBox, previewMask, applyTemplate, clearTemplate, polygonPoints, currentImage]);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!currentImage) return;
    
    const { x, y } = screenToImage(e.clientX, e.clientY);
    
    // If in paste mode, update mouse position
    if (isPasting) {
      setMousePosition({ x, y });
      return;
    }
    
    // Polygon tool: update mouse position for dynamic preview rendering
    if (currentTool === 'polygon' && polygonPoints.length > 0) {
      setMousePosition({ x, y });

      // Press-and-hold drawing: sample points while mouse is held down
      if (isPolygonDrawing && (e.buttons & 1) === 1) {
        const sampleDistance = Math.max(6, 12 / scale);
        const last = lastPolygonDrawPoint;
        if (!last) {
          setLastPolygonDrawPoint({ x, y });
        } else {
          const dx = x - last.x;
          const dy = y - last.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance >= sampleDistance) {
            addPolygonPoint({ x, y });
            setLastPolygonDrawPoint({ x, y });
          }
        }
      }
    }

    if (isBrushing) {
      setBrushStroke(prev => [...prev, { x, y }]);
      return;
    }

    if (currentTool === 'line' && lineStartPoint) {
      setLineEndPoint({ x, y });
      return;
    }
    
    // Drag control points
    if (draggingPointIndex !== null) {
      const newPoints = [...controlPoints];
      newPoints[draggingPointIndex] = { ...newPoints[draggingPointIndex], x, y };
      setControlPoints(newPoints);
      setHoverEdgePoint(null);
      return;
    }
    
    // Check whether hovering on boundary line (show add-control-point hint)
    if (editingAnnotationId && controlPoints.length >= 3 && !isDragging && !isDrawingBox) {
      const pointIndex = findControlPointAtPosition(x, y);
      if (pointIndex === null) {
        // Not hovering on a control point; check boundary line instead
        const edgeHitRadius = 15 / scale;
        const result = findNearestEdgePosition(x, y);
        if (result && result.distance < edgeHitRadius) {
          setHoverEdgePoint(result.point);
        } else {
          setHoverEdgePoint(null);
        }
      } else {
        setHoverEdgePoint(null);
      }
    } else {
      setHoverEdgePoint(null);
    }
    
    if (isDragging) {
      setOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    } else if (isDrawingBox) {
      setTempBox({
        x1: Math.min(boxStart.x, x),
        y1: Math.min(boxStart.y, y),
        x2: Math.max(boxStart.x, x),
        y2: Math.max(boxStart.y, y)
      });
    }
  }, [currentImage, isDragging, isDrawingBox, dragStart, boxStart, screenToImage, setTempBox, draggingPointIndex, controlPoints, isPasting, currentTool, polygonPoints, editingAnnotationId, scale, findControlPointAtPosition, findNearestEdgePosition, isBrushing, lineStartPoint, isPolygonDrawing, lastPolygonDrawPoint, addPolygonPoint]);

  // Handle mouse release
  const handleMouseUp = useCallback(() => {
    if (isPolygonDrawing) {
      setIsPolygonDrawing(false);
      setLastPolygonDrawPoint(null);
    }

    if (isBrushing) {
      if (currentImage && brushStroke.length > 1 && currentCategoryId) {
        const category = categories.find(c => c.id === currentCategoryId);
        if (!category) {
          setError('Please select or create a category first.');
        } else {
          const drawnMask = createMaskFromStroke(brushStroke, currentImage.width, currentImage.height, brushSize);
          const w = currentImage.width;
          const h = currentImage.height;

          // Find target annotation: prefer explicitly selected, then topmost overlapping
          let targetAnn = selectedAnnotationIds.length === 1
            ? annotations.find(a => a.id === selectedAnnotationIds[0] && a.imageId === currentImage.id) ?? null
            : null;

          if (!targetAnn && drawMode === 'remove') {
            const imageAnns = annotations.filter(a => a.imageId === currentImage.id && a.visible);
            for (let i = imageAnns.length - 1; i >= 0; i--) {
              const ann = imageAnns[i];
              const existingMask = decodeRLE(ann.segmentation);
              let overlaps = false;
              for (let j = 0; j < drawnMask.length; j++) {
                if (drawnMask[j] === 1 && existingMask[j] === 1) { overlaps = true; break; }
              }
              if (overlaps) { targetAnn = ann; break; }
            }
          }

          if (!targetAnn && drawMode === 'add') {
            const imageAnns = annotations.filter(a => a.imageId === currentImage.id && a.visible && a.categoryId === category.id);
            for (let i = imageAnns.length - 1; i >= 0; i--) {
              const ann = imageAnns[i];
              const existingMask = decodeRLE(ann.segmentation);
              let overlaps = false;
              for (let j = 0; j < drawnMask.length; j++) {
                if (drawnMask[j] === 1 && existingMask[j] === 1) { overlaps = true; break; }
              }
              if (overlaps) { targetAnn = ann; break; }
            }
          }

          if (targetAnn && drawMode === 'remove') {
            // Subtract brush area from target annotation
            const existingMask = decodeRLE(targetAnn.segmentation);
            const resultMask = subtractMasks(existingMask, drawnMask);
            const area = resultMask.reduce((sum, val) => sum + val, 0);
            if (area > 0) {
              const rle = maskToRLE(resultMask, w, h);
              const bbox = computeBboxFromMask(resultMask, w, h);
              updateAnnotation(targetAnn.id, { segmentation: rle, bbox, area });
            }
          } else if (targetAnn && drawMode === 'add') {
            // Merge brush area into target annotation
            const existingMask = decodeRLE(targetAnn.segmentation);
            const resultMask = mergeMasks(existingMask, drawnMask);
            const area = resultMask.reduce((sum, val) => sum + val, 0);
            const rle = maskToRLE(resultMask, w, h);
            const bbox = computeBboxFromMask(resultMask, w, h);
            updateAnnotation(targetAnn.id, { segmentation: rle, bbox, area });
          } else {
            // No selected annotation — create a new one
            const rle = maskToRLE(drawnMask, w, h);
            const area = drawnMask.reduce((sum, val) => sum + val, 0);
            if (area > 0) {
              const bbox = computeBboxFromMask(drawnMask, w, h);
              addAnnotation({
                imageId: currentImage.id,
                categoryId: category.id,
                categoryName: category.name,
                segmentation: rle,
                bbox,
                area,
                score: 1
              });
            }
          }
        }
      }
      setIsBrushing(false);
      setBrushStroke([]);
      return;
    }

    if (lineStartPoint && lineEndPoint) {
      if (currentImage && currentCategoryId) {
        const category = categories.find(c => c.id === currentCategoryId);
        if (!category) {
          setError('Please select or create a category first.');
        } else {
          const length = Math.sqrt((lineEndPoint.x - lineStartPoint.x) ** 2 + (lineEndPoint.y - lineStartPoint.y) ** 2);
          if (length >= 2) {
            const mask = createMaskFromLine(lineStartPoint, lineEndPoint, currentImage.width, currentImage.height, lineThickness);
            const rle = maskToRLE(mask, currentImage.width, currentImage.height);
            const area = mask.reduce((sum, value) => sum + value, 0);
            if (area > 0) {
              let minX = currentImage.width;
              let minY = currentImage.height;
              let maxX = 0;
              let maxY = 0;
              for (let y = 0; y < currentImage.height; y++) {
                for (let x = 0; x < currentImage.width; x++) {
                  const idx = y * currentImage.width + x;
                  if (mask[idx] === 1) {
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                  }
                }
              }
              addAnnotation({
                imageId: currentImage.id,
                categoryId: category.id,
                categoryName: category.name,
                segmentation: rle,
                bbox: [minX, minY, maxX - minX + 1, maxY - minY + 1],
                area,
                score: 1
              });
            }
          }
        }
      }
      setLineStartPoint(null);
      setLineEndPoint(null);
      return;
    }

    // If dragging a control point, update the mask on release
    if (draggingPointIndex !== null && editingAnnotationId && controlPoints.length >= 3) {
      const selectedAnn = annotations.find(ann => ann.id === editingAnnotationId);
      if (selectedAnn) {
        const [height, width] = selectedAnn.segmentation.size;
        const newMask = polygonToMask(controlPoints, width, height);
        const newRLE = maskToRLE(newMask, width, height);
        const newArea = newMask.reduce((a, b) => a + b, 0);
        
        // Calculate new bbox
        let minX = width, minY = height, maxX = 0, maxY = 0;
        for (const p of controlPoints) {
          minX = Math.min(minX, p.x);
          minY = Math.min(minY, p.y);
          maxX = Math.max(maxX, p.x);
          maxY = Math.max(maxY, p.y);
        }
        
        updateAnnotation(editingAnnotationId, {
          segmentation: newRLE,
          bbox: [minX, minY, maxX - minX, maxY - minY],
          area: newArea
        });
      }
      setDraggingPointIndex(null);
      return;
    }
    
    setIsDragging(false);
    
    if (isDrawingBox && tempBox) {
      setIsDrawingBox(false);
      // If selected box area is too small, clear it
      const area = Math.abs((tempBox.x2 - tempBox.x1) * (tempBox.y2 - tempBox.y1));
      if (area < 100) {
        setTempBox(null);
      } else if (currentTool === 'template') {
        // Template tool: save as template
        saveTemplate(tempBox);
      } else {
        // Box tool: call API to generate segmentation preview
        updateBoxPreview(tempBox);
      }
    }
  }, [isDrawingBox, tempBox, setTempBox, draggingPointIndex, editingAnnotationId, controlPoints, annotations, updateAnnotation, updateBoxPreview, currentTool, saveTemplate, isBrushing, currentImage, brushStroke, currentCategoryId, categories, brushSize, addAnnotation, setError, lineStartPoint, lineEndPoint, lineThickness, isPolygonDrawing, drawMode, selectedAnnotationIds]);

  // Handle wheel zooming (centered on mouse position)
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    
    // Mouse position within container
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Mouse position in image coordinates (before zoom)
    const imageX = (mouseX - offset.x) / scale;
    const imageY = (mouseY - offset.y) / scale;
    
    // Calculate new zoom scale
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(0.1, Math.min(5, scale * delta));
    
    // Calculate new offset so mouse stays on the same image coordinate after zoom
    const newOffsetX = mouseX - imageX * newScale;
    const newOffsetY = mouseY - imageY * newScale;
    
    setScale(newScale);
    setOffset({ x: newOffsetX, y: newOffsetY });
  }, [scale, offset]);

  // Register wheel event with { passive: false } to allow preventDefault
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // Redraw on initialization and image changes
  useEffect(() => {
    drawMainCanvas();
  }, [drawMainCanvas]);

  useEffect(() => {
    drawOverlay();
  }, [drawOverlay]);

  useEffect(() => {
    drawPolygonOverlay();
  }, [drawPolygonOverlay]);

  // Auto-scale to fit container
  useEffect(() => {
    if (!currentImage || !containerRef.current) return;
    
    const container = containerRef.current;
    const scaleX = container.clientWidth / currentImage.width;
    const scaleY = container.clientHeight / currentImage.height;
    const fitScale = Math.min(scaleX, scaleY, 1);
    
    setScale(fitScale);
    setOffset({
      x: (container.clientWidth - currentImage.width * fitScale) / 2,
      y: (container.clientHeight - currentImage.height * fitScale) / 2
    });
  }, [currentImage]);

  // Get cursor style
  const getCursorClass = () => {
    // Use grabbing cursor while dragging
    if (isDragging) return 'cursor-grabbing';
    
    // Paste mode uses a special cursor
    if (isPasting) return 'tool-paste';
    
    switch (currentTool) {
      case 'hand': return 'tool-hand';
      case 'pointer': return 'tool-pointer';
      case 'add-point': return 'tool-add-point';
      case 'remove-point': return 'tool-remove-point';
      case 'box': return 'tool-box';
      case 'brush': return 'tool-brush';
      case 'line': return 'tool-line';
      case 'text': return 'tool-text';
      case 'template': return 'tool-template';
      case 'polygon': return 'tool-polygon';
      default: return '';
    }
  };

  if (!currentImage) {
    return (
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#cdd0d3' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ width: 64, height: 64, mx: 'auto', mb: 2, borderRadius: 2, bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#94a3b8' }}>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </Box>
          <Typography variant="body2" fontWeight={500} color="text.secondary" sx={{ mb: 0.5 }}>
            Upload an image to start
          </Typography>
          {/* <Typography variant="caption" color="text.disabled">JPG, PNG, WebP, BMP supported</Typography> */}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      ref={containerRef}
      className={`annotation-canvas ${getCursorClass()}`}
      sx={{ flex: 1, overflow: 'hidden', position: 'relative', backgroundColor: '#cdd0d3' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onContextMenu={handleContextMenu}
      onAuxClick={(e) => e.preventDefault()}  
    >
      <Box
        sx={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transformOrigin: '0 0',
          position: 'absolute',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <canvas
          ref={overlayRef}
          style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        />
      </Box>
      <canvas
        ref={polygonOverlayRef}
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 10 }}
      />
    </Box>
  );
});
