import { useEffect, useRef, useCallback, useState } from 'react';
import { useAnnotationStore } from '../store/annotationStore';
import type { AutoSaveData, Annotation, Category } from '../types';

const AUTO_SAVE_KEY = 'sam3_annotation_autosave';
const DEBOUNCE_MS = 2000; // 2 second debounce

/**
 * Get auto-save data
 */
export function getAutoSaveData(): AutoSaveData | null {
  try {
    const data = localStorage.getItem(AUTO_SAVE_KEY);
    if (!data) return null;
    
    const parsed = JSON.parse(data) as AutoSaveData;
    
    // Validate data format
    if (!parsed.version || !parsed.images || !parsed.annotations) {
      return null;
    }
    
    return parsed;
  } catch (err) {
    console.warn('[AutoSave] Failed to read auto-save data:', err);
    return null;
  }
}

/**
 * Clear auto-save data
 */
export function clearAutoSaveData(): void {
  try {
    localStorage.removeItem(AUTO_SAVE_KEY);
    console.log('[AutoSave] Auto-save data cleared');
  } catch (err) {
    console.warn('[AutoSave] Failed to clear auto-save data:', err);
  }
}

/**
 * Check if auto-save data exists
 */
export function hasAutoSaveData(): boolean {
  return getAutoSaveData() !== null;
}

/**
 * Auto-save hook
 * Returns save status for UI display
 */
export function useAutoSave() {
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  
  const {
    images,
    annotations,
    categories,
    currentImage,
    currentCategoryId
  } = useAnnotationStore();

  // Save to localStorage
  const saveToLocalStorage = useCallback(() => {
    // If no data exists, don't save
    if (images.length === 0 && annotations.length === 0 && categories.length === 0) {
      return;
    }

    setIsSaving(true);
    
    try {
      const now = new Date();
      const autoSaveData: AutoSaveData = {
        version: '1.0',
        savedAt: now.toISOString(),
        images: images.map(img => ({
          id: img.id,
          fileName: img.fileName,
          width: img.width,
          height: img.height
        })),
        annotations: annotations.map(ann => ({
          ...ann,
          selected: false // Clear selection state
        })),
        categories,
        currentImageFileName: currentImage?.fileName || null,
        currentCategoryId
      };

      localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(autoSaveData));
      setLastSavedAt(now);
      console.log('[AutoSave] Auto-saved', {
        images: images.length,
        annotations: annotations.length,
        categories: categories.length
      });
    } catch (err) {
      console.warn('[AutoSave] Auto-save failed:', err);
    } finally {
      setIsSaving(false);
    }
  }, [images, annotations, categories, currentImage, currentCategoryId]);

  // Debounced save
  const debouncedSave = useCallback(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    
    debounceTimer.current = setTimeout(() => {
      saveToLocalStorage();
    }, DEBOUNCE_MS);
  }, [saveToLocalStorage]);

  // Monitor changes and auto-save
  useEffect(() => {
    debouncedSave();
    
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [images, annotations, categories, debouncedSave]);

  // Save immediately before page closes
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Cancel debounce, save immediately
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      saveToLocalStorage();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [saveToLocalStorage]);

  return {
    saveNow: saveToLocalStorage,
    lastSavedAt,
    isSaving
  };
}

/**
 * Match by filename and restore annotations
 * @param autoSaveData Auto-save data
 * @param newImages Newly uploaded image list
 * @returns Matching results
 */
export function matchAndRestoreAnnotations(
  autoSaveData: AutoSaveData,
  newImages: Array<{ id: string; fileName: string; width: number; height: number }>
): {
  matchedAnnotations: Annotation[];
  matchedCategories: Category[];
  matchedCount: number;
  unmatchedCount: number;
  currentImageId: string | null;
} {
  // Create filename-to-ID mapping for new images
  const fileNameToNewId = new Map<string, string>();
  newImages.forEach(img => {
    fileNameToNewId.set(img.fileName, img.id);
  });

  // Create old image ID to new image ID mapping
  const oldIdToNewId = new Map<string, string>();
  autoSaveData.images.forEach(oldImg => {
    const newId = fileNameToNewId.get(oldImg.fileName);
    if (newId) {
      oldIdToNewId.set(oldImg.id, newId);
    }
  });

  // Convert annotation imageId
  const matchedAnnotations: Annotation[] = [];
  let unmatchedCount = 0;

  autoSaveData.annotations.forEach(ann => {
    const newImageId = oldIdToNewId.get(ann.imageId);
    if (newImageId) {
      matchedAnnotations.push({
        ...ann,
        imageId: newImageId,
        // Generate new annotation ID to avoid conflicts
        id: `restored_${ann.id}_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`
      });
    } else {
      unmatchedCount++;
    }
  });

  // Find current image
  let currentImageId: string | null = null;
  if (autoSaveData.currentImageFileName) {
    currentImageId = fileNameToNewId.get(autoSaveData.currentImageFileName) || null;
  }

  return {
    matchedAnnotations,
    matchedCategories: autoSaveData.categories,
    matchedCount: matchedAnnotations.length,
    unmatchedCount,
    currentImageId
  };
}
