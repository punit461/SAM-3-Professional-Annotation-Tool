import { create } from 'zustand';
import type { 
  AppState, 
  Annotation, 
  AnnotationTool, 
  Point, 
  BoundingBox, 
  ImageInfo,
  Category,
  HistoryState,
  PreviewMask,
  RLEMask
} from '../types';

// Default categories - empty, let user add their own
const DEFAULT_CATEGORIES: Category[] = [];

// Default color palette (user customizable)
export const COLOR_PALETTE = [
  '#EF4444', '#F97316', '#F59E0B', '#EAB308', '#84CC16',
  '#22C55E', '#10B981', '#14B8A6', '#06B6D4', '#0EA5E9',
  '#3B82F6', '#6366F1', '#8B5CF6', '#A855F7', '#D946EF',
  '#EC4899', '#F43F5E', '#78716C', '#64748B', '#0F172A',
];

// Generate color (use color palette in order)
let colorIndex = 0;
const getNextColor = (): string => {
  const color = COLOR_PALETTE[colorIndex % COLOR_PALETTE.length];
  colorIndex++;
  return color;
};

/**
 * Decode RLE mask to binary array
 */
function decodeRLE(rle: RLEMask): Uint8Array {
  const [height, width] = rle.size;
  const mask = new Uint8Array(height * width);
  
  let idx = 0;
  let value = 0;
  
  for (const count of rle.counts) {
    for (let i = 0; i < count; i++) {
      if (idx < mask.length) {
        mask[idx] = value;
        idx++;
      }
    }
    value = 1 - value;
  }
  
  return mask;
}

/**
 * Encode binary array to RLE mask
 */
function encodeRLE(mask: Uint8Array, width: number, height: number): RLEMask {
  const counts: number[] = [];
  let currentValue = 0;
  let currentCount = 0;
  
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === currentValue) {
      currentCount++;
    } else {
      counts.push(currentCount);
      currentValue = mask[i];
      currentCount = 1;
    }
  }
  counts.push(currentCount);
  
  return {
    counts,
    size: [height, width]
  };
}

/**
 * Compute bbox and area from RLE mask
 * Returns bbox in [x, y, width, height] format and pixel area
 */
function computeBboxAndAreaFromRLE(rle: RLEMask): { bbox: [number, number, number, number]; area: number } {
  const [height, width] = rle.size;
  const mask = decodeRLE(rle);
  
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;
  let area = 0;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (mask[idx] === 1) {
        area++;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  // If no pixels, return zero bbox
  if (area === 0) {
    return { bbox: [0, 0, 0, 0], area: 0 };
  }
  
  return {
    bbox: [minX, minY, maxX - minX + 1, maxY - minY + 1],
    area
  };
}

/**
 * Offset RLE mask
 * Uses same indexing as drawMask: idx directly corresponds to linear array index
 * imageData is row-major: idx = y * width + x
 */
function offsetRLE(rle: RLEMask, offsetX: number, offsetY: number): RLEMask {
  const [height, width] = rle.size;
  const mask = decodeRLE(rle);
  
  // Create new mask array
  const newMask = new Uint8Array(height * width);
  
  const dx = Math.round(offsetX);
  const dy = Math.round(offsetY);
  
  // Iterate through original mask, move each pixel to new position
  // imageData uses row-major: idx = y * width + x
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const oldIdx = y * width + x;
      if (mask[oldIdx] === 1) {
        const newX = x + dx;
        const newY = y + dy;
        
        // Check if new position is within bounds
        if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
          const newIdx = newY * width + newX;
          newMask[newIdx] = 1;
        }
      }
    }
  }
  
  return encodeRLE(newMask, width, height);
}

const revokeImageUrl = (url?: string) => {
  if (typeof window === 'undefined' || !url) return;
  if (url.startsWith('blob:')) {
    try {
      URL.revokeObjectURL(url);
    } catch (err) {
      console.warn('Failed to revoke object URL', err);
    }
  }
};

interface AnnotationStore extends AppState {
  // Image operations
  setCurrentImage: (image: ImageInfo | null) => void;
  addImage: (image: ImageInfo) => void;
  addImages: (images: ImageInfo[]) => void;
  setImages: (images: ImageInfo[]) => void;  // For loading projects
  removeImage: (id: string) => void;
  
  // Annotation operations
  addAnnotation: (annotation: Omit<Annotation, 'id' | 'color' | 'visible' | 'selected'>) => void;
  addAnnotations: (annotations: Omit<Annotation, 'id' | 'color' | 'visible' | 'selected'>[]) => void;
  setAnnotations: (annotations: Annotation[]) => void;  // For loading projects
  updateAnnotation: (id: string, updates: Partial<Annotation>) => void;
  deleteAnnotation: (id: string) => void;
  deleteSelectedAnnotations: () => void;
  clearAllAnnotations: () => void;
  selectAnnotation: (id: string, multi?: boolean) => void;
  deselectAll: () => void;
  selectAll: () => void;
  toggleAnnotationVisibility: (id: string) => void;
  setAllAnnotationsVisibility: (visible: boolean) => void;
  copySelectedAnnotations: () => void;
  startPasting: () => void;  // Enter paste mode
  confirmPaste: (x: number, y: number) => void;  // Confirm paste at specified position
  cancelPaste: () => void;  // Cancel paste mode
  
  // Tool operations
  setCurrentTool: (tool: AnnotationTool) => void;
  setConfidenceThreshold: (threshold: number) => void;
  setBrushSize: (size: number) => void;
  setLineThickness: (size: number) => void;
  setDrawMode: (mode: 'add' | 'remove') => void;

  // Image enhancement operations
  setBrightness: (value: number) => void;
  setContrast: (value: number) => void;
  setEnhancementMode: (mode: 'none' | 'histogram' | 'auto') => void;
  resetEnhancement: () => void;
  
  // Temporary drawing operations
  addTempPoint: (point: Point) => void;
  clearTempPoints: () => void;
  setTempBox: (box: BoundingBox | null) => void;
  setTextPrompt: (prompt: string) => void;
  setPreviewMask: (mask: PreviewMask | null) => void;
  
  // Polygon drawing operations
  addPolygonPoint: (point: { x: number; y: number }) => void;
  clearPolygonPoints: () => void;
  
  // Template operations
  setTemplateImage: (image: ImageInfo | null) => void;
  setTemplateBox: (box: BoundingBox | null) => void;
  
  // Category operations
  setCurrentCategoryId: (id: number) => void;
  addCategory: (name: string, color?: string) => void;
  deleteCategory: (id: number) => void;
  updateCategory: (id: number, updates: Partial<Category>) => void;
  setCategories: (categories: Category[]) => void;  // For loading projects
  
  // History operations
  saveToHistory: () => void;
  undo: () => void;
  redo: () => void;
  
  // UI operations
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  toggleShortcuts: () => void;
  setShortcutOverride: (action: string, key: string) => void;
  resetShortcutOverrides: () => void;
  
  // Reset
  reset: () => void;
}

const initialState: AppState = {
  currentImage: null,
  images: [],
  annotations: [],
  selectedAnnotationIds: [],
  copiedAnnotations: [],
  currentTool: 'hand',
  confidenceThreshold: 0.5,
  brushSize: 12,
  lineThickness: 4,
  drawMode: 'add' as const,
  brightness: 0,
  contrast: 0,
  enhancementMode: 'none',
  tempPoints: [],
  tempBox: null,
  textPrompt: '',
  previewMask: null,
  polygonPoints: [],
  templateImage: null,
  templateBox: null,
  isPasting: false,
  pasteOffset: null,
  categories: DEFAULT_CATEGORIES,
  currentCategoryId: 0,  // 0 means no category selected yet
  history: [],
  historyIndex: -1,
  isLoading: false,
  error: null,
  showShortcuts: false,
  shortcutOverrides: {},
};

export const useAnnotationStore = create<AnnotationStore>((set, get) => ({
  ...initialState,
  
  // Image operations
  setCurrentImage: (image) => set({ currentImage: image }),
  
  addImage: (image) => set((state) => ({
    images: [...state.images, image],
    currentImage: state.currentImage || image
  })),

  addImages: (newImages) => set((state) => ({
    images: [...state.images, ...newImages],
    currentImage: state.currentImage || newImages[0] || null
  })),

  // For loading projects - directly set image list
  setImages: (images) => set((state) => {
    // Clean up old blob URLs
    state.images.forEach(img => revokeImageUrl(img.url));
    return {
      images,
      currentImage: images[0] || null
    };
  }),

  removeImage: (id) => set((state) => {
    const removedImage = state.images.find(img => img.id === id);
    if (removedImage) {
      revokeImageUrl(removedImage.url);
    }

    const newImages = state.images.filter(img => img.id !== id);
    const newAnnotations = state.annotations.filter(ann => ann.imageId !== id);
    let newCurrentImage = state.currentImage;
    
    if (state.currentImage?.id === id) {
      const currentIndex = state.images.findIndex(img => img.id === id);
      newCurrentImage = newImages[currentIndex] || newImages[currentIndex - 1] || null;
    }

    const newSelectedIds = state.selectedAnnotationIds.filter(aid =>
      newAnnotations.some(ann => ann.id === aid)
    );
    
    return {
      images: newImages,
      annotations: newAnnotations,
      currentImage: newCurrentImage,
      selectedAnnotationIds: newSelectedIds,
      templateImage: state.templateImage?.id === id ? null : state.templateImage
    };
  }),
  
  // Annotation operations
  addAnnotation: (annotation) => {
    const state = get();
    const category = state.categories.find(c => c.id === annotation.categoryId);
    const newAnnotation: Annotation = {
      ...annotation,
      id: `ann_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      color: category?.color || getNextColor(),
      visible: true,
      selected: false,
    };
    
    // Log annotation data for debugging
    const [bboxX, bboxY, bboxW, bboxH] = newAnnotation.bbox;
    console.log('[addAnnotation]', {
      annotationType: 'instance_segmentation',
      classId: newAnnotation.categoryId,
      id: newAnnotation.id,
      data: {
        bitMap: newAnnotation.segmentation.counts.join('Z'),
        rangeBox: {
          xmin: bboxX,
          ymin: bboxY,
          xmax: bboxX + bboxW,
          ymax: bboxY + bboxH,
        },
      },
    });

    set((state) => ({
      annotations: [...state.annotations, newAnnotation]
    }));
    
    get().saveToHistory();
  },
  
  // Batch add annotations (avoid multiple state updates)
  addAnnotations: (annotationsToAdd) => {
    const state = get();
    const newAnnotations: Annotation[] = annotationsToAdd.map((annotation, index) => {
      const category = state.categories.find(c => c.id === annotation.categoryId);
      return {
        ...annotation,
        id: `ann_${Date.now()}_${index}_${Math.random().toString(36).substr(2, 9)}`,
        color: category?.color || getNextColor(),
        visible: true,
        selected: false,
      };
    });
    
    set((state) => ({
      annotations: [...state.annotations, ...newAnnotations]
    }));
    
    // Delay saving history to avoid blocking UI
    setTimeout(() => get().saveToHistory(), 100);
  },
  
  // For loading projects - directly set annotation list
  setAnnotations: (annotations) => set({
    annotations,
    selectedAnnotationIds: []
  }),
  
  updateAnnotation: (id, updates) => {
    set((state) => ({
      annotations: state.annotations.map(ann => 
        ann.id === id ? { ...ann, ...updates } : ann
      )
    }));
    get().saveToHistory();
  },
  
  deleteAnnotation: (id) => {
    set((state) => ({
      annotations: state.annotations.filter(ann => ann.id !== id),
      selectedAnnotationIds: state.selectedAnnotationIds.filter(aid => aid !== id)
    }));
    get().saveToHistory();
  },
  
  deleteSelectedAnnotations: () => {
    set((state) => ({
      annotations: state.annotations.filter(
        ann => !state.selectedAnnotationIds.includes(ann.id)
      ),
      selectedAnnotationIds: []
    }));
    get().saveToHistory();
  },

  clearAllAnnotations: () => {
    set((state) => ({
      annotations: state.currentImage
        ? state.annotations.filter(ann => ann.imageId !== state.currentImage!.id)
        : [],
      selectedAnnotationIds: []
    }));
    get().saveToHistory();
  },
  
  selectAnnotation: (id, multi = false) => {
    set((state) => {
      if (multi) {
        const isSelected = state.selectedAnnotationIds.includes(id);
        return {
          selectedAnnotationIds: isSelected
            ? state.selectedAnnotationIds.filter(aid => aid !== id)
            : [...state.selectedAnnotationIds, id],
          annotations: state.annotations.map(ann => ({
            ...ann,
            selected: isSelected
              ? ann.id !== id && state.selectedAnnotationIds.includes(ann.id)
              : ann.id === id || state.selectedAnnotationIds.includes(ann.id)
          }))
        };
      }
      return {
        selectedAnnotationIds: [id],
        annotations: state.annotations.map(ann => ({
          ...ann,
          selected: ann.id === id
        }))
      };
    });
  },
  
  deselectAll: () => set((state) => ({
    selectedAnnotationIds: [],
    annotations: state.annotations.map(ann => ({ ...ann, selected: false }))
  })),
  
  selectAll: () => set((state) => ({
    selectedAnnotationIds: state.annotations.map(ann => ann.id),
    annotations: state.annotations.map(ann => ({ ...ann, selected: true }))
  })),
  
  toggleAnnotationVisibility: (id) => set((state) => ({
    annotations: state.annotations.map(ann =>
      ann.id === id ? { ...ann, visible: !ann.visible } : ann
    )
  })),

  setAllAnnotationsVisibility: (visible) => set((state) => ({
    annotations: state.currentImage
      ? state.annotations.map(ann =>
          ann.imageId === state.currentImage!.id ? { ...ann, visible } : ann
        )
      : state.annotations
  })),
  
  // Copy selected annotations
  copySelectedAnnotations: () => {
    const state = get();
    const selectedAnnotations = state.annotations.filter(
      ann => state.selectedAnnotationIds.includes(ann.id)
    );
    if (selectedAnnotations.length > 0) {
      set({ copiedAnnotations: selectedAnnotations });
      console.log(`[copySelectedAnnotations] Copied ${selectedAnnotations.length} annotations`);
    }
  },
  
  // Enter paste mode (triggered by Ctrl+V)
  startPasting: () => {
    const state = get();
    if (state.copiedAnnotations.length === 0) {
      console.log('[startPasting] No annotations to paste');
      return;
    }
    if (!state.currentImage) {
      console.log('[startPasting] No current image');
      return;
    }
    set({ isPasting: true, pasteOffset: { x: 0, y: 0 } });
    console.log('[startPasting] Entered paste mode, click target position');
  },
  
  // Confirm paste at specified position
  confirmPaste: (clickX: number, clickY: number) => {
    const state = get();
    const { copiedAnnotations, currentImage, annotations } = state;
    
    if (copiedAnnotations.length === 0 || !currentImage) {
      set({ isPasting: false, pasteOffset: null });
      return;
    }
    
    // Calculate centroid from actual mask pixels (consistent with preview)
    let totalPixelX = 0;
    let totalPixelY = 0;
    let totalPixels = 0;
    
    copiedAnnotations.forEach(ann => {
      const mask = decodeRLE(ann.segmentation);
      const [maskHeight, maskWidth] = ann.segmentation.size;
      
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
    
    const origCenterX = totalPixels > 0 ? totalPixelX / totalPixels : 0;
    const origCenterY = totalPixels > 0 ? totalPixelY / totalPixels : 0;
    
    // Calculate offset: from centroid to click position
    const offsetX = clickX - origCenterX;
    const offsetY = clickY - origCenterY;
    
    const newAnnotations = copiedAnnotations.map((ann, index) => {
      // First offset the RLE mask
      const newSegmentation = offsetRLE(ann.segmentation, offsetX, offsetY);
      
      // Recalculate bbox and area from offset mask (so bbox accurately corresponds to mask)
      const { bbox: newBbox, area: newArea } = computeBboxAndAreaFromRLE(newSegmentation);
      
      return {
        ...ann,
        id: `ann_${Date.now()}_${index}_${Math.random().toString(36).substr(2, 9)}`,
        imageId: currentImage.id,
        bbox: newBbox,
        area: newArea,
        segmentation: newSegmentation,
        selected: false
      };
    })
    // Filter out empty annotations (completely outside image bounds)
    .filter(ann => ann.area > 0);
    
    set({
      annotations: [...annotations, ...newAnnotations],
      selectedAnnotationIds: newAnnotations.map(ann => ann.id),
      isPasting: false,
      pasteOffset: null
    });
    
    console.log(`[confirmPaste] Pasted ${newAnnotations.length} annotations at position (${clickX}, ${clickY}), offset (${offsetX}, ${offsetY})`);
    get().saveToHistory();
  },
  
  // Cancel paste mode
  cancelPaste: () => {
    set({ isPasting: false, pasteOffset: null });
    console.log('[cancelPaste] Cancelled paste mode');
  },
  
  // Tool operations
  setCurrentTool: (tool) => set({ 
    currentTool: tool,
    tempPoints: [],
    tempBox: null,
    previewMask: null,
    polygonPoints: []
  }),
  
  setConfidenceThreshold: (threshold) => set({ confidenceThreshold: threshold }),
  setBrushSize: (size) => set({ brushSize: Math.max(1, Math.min(100, size)) }),
  setLineThickness: (size) => set({ lineThickness: Math.max(1, Math.min(50, size)) }),
  setDrawMode: (mode) => set({ drawMode: mode }),

  // Image enhancement operations
  setBrightness: (value) => set({ brightness: Math.max(-100, Math.min(100, value)) }),
  setContrast: (value) => set({ contrast: Math.max(-100, Math.min(100, value)) }),
  setEnhancementMode: (mode) => set({ enhancementMode: mode }),
  resetEnhancement: () => set({
    brightness: 0,
    contrast: 0,
    enhancementMode: 'none'
  }),
  
  // Temporary drawing operations
  addTempPoint: (point) => set((state) => ({
    tempPoints: [...state.tempPoints, point]
  })),
  
  clearTempPoints: () => set({ tempPoints: [], previewMask: null }),
  
  setTempBox: (box) => set({ tempBox: box }),
  
  setTextPrompt: (prompt) => set({ textPrompt: prompt }),
  
  setPreviewMask: (mask) => set({ previewMask: mask }),
  
  // Polygon drawing operations
  addPolygonPoint: (point) => set((state) => ({
    polygonPoints: [...state.polygonPoints, point]
  })),
  
  clearPolygonPoints: () => set({ polygonPoints: [] }),
  
  // Template operations
  setTemplateImage: (image) => set({ templateImage: image }),
  
  setTemplateBox: (box) => set({ templateBox: box }),
  
  // Category operations
  setCurrentCategoryId: (id) => set({ currentCategoryId: id }),
  
  addCategory: (name, color) => set((state) => {
    const maxId = state.categories.length > 0 
      ? Math.max(...state.categories.map(c => c.id)) 
      : 0;
    const newId = maxId + 1;
    const newCategory = {
      id: newId,
      name,
      color: color || getNextColor(),
      supercategory: ''
    };
    return {
      categories: [...state.categories, newCategory],
      currentCategoryId: state.currentCategoryId || newId
    };
  }),

  deleteCategory: (id) => set((state) => {
    const newCategories = state.categories.filter(c => c.id !== id);
    // If deleting current category, switch to first category
    let newCurrentId = state.currentCategoryId;
    if (state.currentCategoryId === id) {
      newCurrentId = newCategories.length > 0 ? newCategories[0].id : 0;
    }
    return {
      categories: newCategories,
      currentCategoryId: newCurrentId
    };
  }),

  updateCategory: (id, updates) => set((state) => {
    // Update category
    const newCategories = state.categories.map(c => 
      c.id === id ? { ...c, ...updates } : c
    );
    
    // If color or name updated, also update all annotations of that category
    let newAnnotations = state.annotations;
    if (updates.color || updates.name) {
      newAnnotations = state.annotations.map(ann => {
        if (ann.categoryId === id) {
          return {
            ...ann,
            ...(updates.color && { color: updates.color }),
            ...(updates.name && { categoryName: updates.name })
          };
        }
        return ann;
      });
    }
    
    return {
      categories: newCategories,
      annotations: newAnnotations
    };
  }),
  
  // For loading projects - directly set category list
  setCategories: (categories) => set({
    categories,
    currentCategoryId: categories[0]?.id || 0
  }),
  
  // History operations
  saveToHistory: () => set((state) => {
    const newHistory = state.history.slice(0, state.historyIndex + 1);
    const historyEntry: HistoryState = {
      annotations: JSON.parse(JSON.stringify(state.annotations)),
      timestamp: Date.now()
    };

    const boundedHistory = [...newHistory, historyEntry].slice(-50);
    
    return {
      history: boundedHistory,
      historyIndex: boundedHistory.length - 1
    };
  }),
  
  undo: () => set((state) => {
    if (state.historyIndex <= 0) return state;
    
    const prevIndex = state.historyIndex - 1;
    const prevState = state.history[prevIndex];
    
    return {
      annotations: JSON.parse(JSON.stringify(prevState.annotations)),
      historyIndex: prevIndex,
      selectedAnnotationIds: []
    };
  }),
  
  redo: () => set((state) => {
    if (state.historyIndex >= state.history.length - 1) return state;
    
    const nextIndex = state.historyIndex + 1;
    const nextState = state.history[nextIndex];
    
    return {
      annotations: JSON.parse(JSON.stringify(nextState.annotations)),
      historyIndex: nextIndex,
      selectedAnnotationIds: []
    };
  }),
  
  // UI operations
  setLoading: (loading) => set({ isLoading: loading }),
  
  setError: (error) => set({ error }),
  
  toggleShortcuts: () => set((state) => ({ showShortcuts: !state.showShortcuts })),

  setShortcutOverride: (action, key) => set((state) => {
    const normalizedKey = key.trim().toLowerCase();
    const nextOverrides = { ...state.shortcutOverrides };

    if (!normalizedKey) {
      delete nextOverrides[action];
      return { shortcutOverrides: nextOverrides };
    }

    if (normalizedKey.length !== 1) {
      return state;
    }

    Object.entries(nextOverrides).forEach(([existingAction, existingKey]) => {
      if (existingAction !== action && existingKey === normalizedKey) {
        delete nextOverrides[existingAction];
      }
    });

    nextOverrides[action] = normalizedKey;
    return { shortcutOverrides: nextOverrides };
  }),

  resetShortcutOverrides: () => set({ shortcutOverrides: {} }),
  
  // Reset
  reset: () => {
    const state = get();
    state.images.forEach(img => revokeImageUrl(img.url));
    if (state.templateImage) {
      revokeImageUrl(state.templateImage.url);
    }
    set({ ...initialState });
  },
}));
