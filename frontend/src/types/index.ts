/**
 * Annotation tool type
 */
export type AnnotationTool = 
  | 'hand'         // Pan tool
  | 'pointer'      // Select tool
  | 'add-point'    // Add point tool
  | 'remove-point' // Remove point tool
  | 'box'          // Box selection tool
  | 'brush'        // Brush mask tool
  | 'line'         // Line annotation tool
  | 'text'         // Text prompt tool
  | 'template'     // Template matching tool
  | 'polygon';     // Manual polygon annotation tool (does not rely on SAM3)

/**
 * Point coordinates (with positive/negative label)
 */
export interface Point {
  x: number;
  y: number;
  label: 1 | 0;  // 1=positive point, 0=negative point
}

/**
 * Bounding box
 */
export interface BoundingBox {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

/**
 * RLE encoded mask
 */
export interface RLEMask {
  counts: number[];
  size: [number, number];
}

/**
 * Preview mask (real-time preview during point segmentation)
 */
export interface PreviewMask {
  mask_rle: RLEMask;
  box: [number, number, number, number];
  score: number;
  area: number;
}

/**
 * Segmentation result
 */
export interface SegmentationResult {
  mask_rle: RLEMask;
  box: [number, number, number, number];
  score: number;
  area: number;
}

/**
 * Single annotation
 */
export interface Annotation {
  id: string;
  imageId: string;
  categoryId: number;
  categoryName: string;
  segmentation: RLEMask;
  bbox: [number, number, number, number]; // [x, y, width, height]
  area: number;
  score: number;
  color: string;
  visible: boolean;
  selected: boolean;
}

/**
 * Image information
 */
export interface ImageInfo {
  id: string;
  fileName: string;
  width: number;
  height: number;
  url: string;
  /** Original file reference, used to regenerate URL when needed */
  file?: File;
  isLocalOnly?: boolean;
}

/**
 * Category
 */
export interface Category {
  id: number;
  name: string;
  color: string;
  supercategory?: string;
}

/**
 * Annotation history (for undo/redo)
 */
export interface HistoryState {
  annotations: Annotation[];
  timestamp: number;
}

/**
 * Application state
 */
export interface AppState {
  // Image state
  currentImage: ImageInfo | null;
  images: ImageInfo[];
  
  // Annotation state
  annotations: Annotation[];
  selectedAnnotationIds: string[];
  copiedAnnotations: Annotation[];  // Copied annotations
  
  // Tool state
  currentTool: AnnotationTool;
  confidenceThreshold: number;
  brushSize: number;
  lineThickness: number;
  drawMode: 'add' | 'remove';  // Add or remove mode for brush/polygon

  // Image enhancement state
  brightness: number;
  contrast: number;
  enhancementMode: 'none' | 'histogram' | 'auto';
  
  // Temporary drawing state
  tempPoints: Point[];
  tempBox: BoundingBox | null;
  textPrompt: string;
  previewMask: PreviewMask | null;  // Point segmentation preview mask
  polygonPoints: { x: number; y: number }[];  // Vertices for manual polygon drawing
  
  // Template state
  templateImage: ImageInfo | null;
  templateBox: BoundingBox | null;
  
  // Paste preview state
  isPasting: boolean;  // Whether in paste mode
  pasteOffset: { x: number; y: number } | null;  // Paste position offset
  
  // Categories
  categories: Category[];
  currentCategoryId: number;
  
  // History
  history: HistoryState[];
  historyIndex: number;
  
  // UI state
  isLoading: boolean;
  error: string | null;
  showShortcuts: boolean;
  shortcutOverrides: Record<string, string>;
}

/**
 * Shortcut key definition
 */
export interface ShortcutKey {
  key: string;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  description: string;
  action: string;
}

/**
 * Project save format (for saving/loading complete project state)
 */
export interface ProjectData {
  version: string;  // Project format version
  savedAt: string;  // Save time in ISO format
  images: Array<{
    id: string;
    fileName: string;
    width: number;
    height: number;
    url: string;  // base64 data URL
  }>;
  annotations: Annotation[];
  categories: Category[];
  currentImageId: string | null;
  currentCategoryId: number;
}

/**
 * Auto-save format (does not include image data, only metadata)
 */
export interface AutoSaveData {
  version: string;
  savedAt: string;
  images: Array<{
    id: string;
    fileName: string;
    width: number;
    height: number;
    // Does not store url, need to re-select images when restoring
  }>;
  annotations: Annotation[];
  categories: Category[];
  currentImageFileName: string | null;  // Use filename instead of id for easier matching
  currentCategoryId: number;
}

/**
 * COCO format export
 */
export interface COCOExport {
  info: {
    description: string;
    version: string;
    year: number;
    date_created: string;
  };
  licenses: Array<{
    id: number;
    name: string;
    url: string;
  }>;
  images: Array<{
    id: number;
    file_name: string;
    width: number;
    height: number;
  }>;
  annotations: Array<{
    id: number;
    image_id: number;
    category_id: number;
    segmentation: RLEMask;
    bbox: [number, number, number, number];
    area: number;
    iscrowd: number;
    score?: number;
  }>;
  categories: Array<{
    id: number;
    name: string;
    supercategory: string;
  }>;
}
