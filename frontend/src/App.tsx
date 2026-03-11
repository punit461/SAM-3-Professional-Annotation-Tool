import { useCallback, useState, useEffect, useRef } from 'react';
import { Toolbar, CanvasToolbar, ExportOptions } from './components/Toolbar';
import { AnnotationCanvas, CanvasHandle } from './components/AnnotationCanvas';
import { AnnotationList } from './components/AnnotationList';
import { TextPromptPanel } from './components/TextPromptPanel';
import { ShortcutsModal } from './components/ShortcutsModal';
import { ImageNavigator } from './components/ImageNavigator';
import { TemplateIndicator } from './components/TemplateIndicator';
import { RecoveryModal } from './components/RecoveryModal';
import { AutoSaveIndicator } from './components/AutoSaveIndicator';
import { Toaster, toast } from 'sonner';
import { Backdrop, Box, CircularProgress, Paper, Typography } from '@mui/material';
import { useAnnotationStore } from './store/annotationStore';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useAutoSave, getAutoSaveData, clearAutoSaveData, matchAndRestoreAnnotations } from './hooks/useAutoSave';
import * as api from './services/api';
import type { SegmentationResult, ImageInfo, AutoSaveData } from './types';

function App() {
  // Recovery mode state
  const [pendingRecovery, setPendingRecovery] = useState<AutoSaveData | null>(null);
  
  // Canvas ref for zoom control
  const canvasRef = useRef<CanvasHandle>(null);
  const [canvasScale, setCanvasScale] = useState(1);
  
  const {
    currentImage,
    setImages,
    setCurrentImage,
    addAnnotations,
    setAnnotations,
    currentCategoryId,
    setCurrentCategoryId,
    categories,
    setCategories,
    tempPoints,
    tempBox,
    textPrompt,
    clearTempPoints,
    setTempBox,
    setLoading,
    setError,
    isLoading,
    error,
    confidenceThreshold,
    images,
    annotations,
  } = useAnnotationStore();

  // Enable auto-save
  const { lastSavedAt, isSaving } = useAutoSave();

  // Check if there's saved data to recover
  useEffect(() => {
    const autoSaveData = getAutoSaveData();
    if (autoSaveData && autoSaveData.annotations.length > 0) {
      setPendingRecovery(autoSaveData);
    }
  }, []);

  // Handle segmentation results
  const handleSegmentationResults = useCallback((results: SegmentationResult[]) => {
    console.log('[handleSegmentationResults] Processing', results.length, 'results');
    console.log('[handleSegmentationResults] currentCategoryId:', currentCategoryId);
    
    if (currentCategoryId === 0) {
      setError('Please add and select a category first');
      console.log('[handleSegmentationResults] No category selected, returning');
      return;
    }
    
    const category = categories.find(c => c.id === currentCategoryId);
    console.log('[handleSegmentationResults] Using category:', category?.name);
    
    // Batch add all annotations (only triggers one state update)
    const annotationsToAdd = results.map(result => ({
      imageId: currentImage!.id,
      categoryId: currentCategoryId,
      categoryName: category?.name || 'Uncategorized',
      segmentation: result.mask_rle,
      bbox: result.box,
      area: result.area,
      score: result.score
    }));
    
    addAnnotations(annotationsToAdd);
    console.log('[handleSegmentationResults] Complete, added', annotationsToAdd.length, 'annotations');
  }, [currentImage, currentCategoryId, categories, addAnnotations, setError]);

  // Handle confirm operation (execute segmentation)
  const handleConfirm = useCallback(async () => {
    if (!currentImage) return;
    
    if (currentCategoryId === 0) {
      setError('Please add and select a category first');
      return;
    }
    
    if (currentImage.isLocalOnly) {
      setError('Image not uploaded to backend yet. Cannot segment. Please confirm backend service and re-upload image.');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      let results: SegmentationResult[] = [];
      
      // Execute segmentation based on current mode
      if (tempPoints.length > 0) {
        results = await api.segmentWithPoints(
          currentImage.id,
          tempPoints,
          confidenceThreshold
        );
        clearTempPoints();
      } else if (tempBox) {
        results = await api.segmentWithBox(
          currentImage.id,
          tempBox,
          true,
          confidenceThreshold
        );
        setTempBox(null);
      } else if (textPrompt) {
        results = await api.segmentWithText(
          currentImage.id,
          textPrompt,
          confidenceThreshold
        );
      }
      
      if (results.length > 0) {
        handleSegmentationResults(results);
      } else {
        setError('No objects detected matching criteria');
      }
    } catch (err: any) {
      setError(err.message || 'Segmentation failed');
    } finally {
      setLoading(false);
    }
  }, [
    currentImage,
    tempPoints,
    tempBox,
    textPrompt,
    confidenceThreshold,
    clearTempPoints,
    setTempBox,
    handleSegmentationResults,
    setLoading,
    setError
  ]);

  // Handle text prompt submission
  const handleTextSubmit = useCallback(async (prompt: string) => {
    console.log('[handleTextSubmit] Starting, prompt:', prompt);
    if (!currentImage) {
      console.log('[handleTextSubmit] No current image');
      return;
    }
    if (currentImage.isLocalOnly) {
      setError('Image not uploaded to backend yet. Cannot use text prompts. Please re-upload and confirm service.');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      console.log('[handleTextSubmit] Calling API, imageId:', currentImage.id);
      const results = await api.segmentWithText(
        currentImage.id,
        prompt,
        confidenceThreshold
      );
      
      console.log('[handleTextSubmit] Got results:', results.length);
      
      if (results.length > 0) {
        handleSegmentationResults(results);
        console.log('[handleTextSubmit] Processing complete');
      } else {
        setError('No objects detected matching criteria');
      }
    } catch (err: any) {
      console.error('[handleTextSubmit] Error:', err);
      setError(err.message || 'Segmentation failed');
    } finally {
      console.log('[handleTextSubmit] Ending, setting loading=false');
      // Use setTimeout to ensure React has a chance to render
      setTimeout(() => {
        setLoading(false);
        console.log('[handleTextSubmit] loading set to false');
      }, 0);
    }
  }, [currentImage, confidenceThreshold, handleSegmentationResults, setLoading, setError]);

  // Handle upload images
  const handleUploadImages = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const uploadedImages: ImageInfo[] = [];
      
      for (const file of files) {
        if (!file.type.startsWith('image/')) {
          console.warn(`Skipping non-image file: ${file.name}`);
          continue;
        }
        
        try {
          const imageInfo = await api.uploadImage(file);
          uploadedImages.push(imageInfo);
        } catch (err: any) {
          console.error(`Upload failed ${file.name}:`, err);
          setError(`Upload ${file.name} failed: ${err.message}`);
        }
      }
      
      if (uploadedImages.length > 0) {
        // Add to image list
        setImages([...images, ...uploadedImages]);
        
        // If no current image, set first as current
        if (!currentImage) {
          setCurrentImage(uploadedImages[0]);
        }
        
        console.log(`Successfully uploaded ${uploadedImages.length} images`);
      }
    } catch (err: any) {
      setError(err.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  }, [images, currentImage, setImages, setCurrentImage, setLoading, setError]);

  // Handle export (supports multiple formats)
  const handleExport = useCallback(async (options: ExportOptions) => {
    const { format, includeImages } = options;
    
    if (annotations.length === 0) {
      setError('No annotations to export');
      return;
    }
    
    setLoading(true);
    
    try {
      switch (format) {
        case 'coco':
          const cocoData = await api.exportCOCO(images, annotations, categories);
          if (includeImages) {
            await api.downloadCOCOWithImages(cocoData, images, 'annotations_coco.zip');
          } else {
            api.downloadCOCOJSON(cocoData, 'instances_default.json');
          }
          break;
        case 'yolo-seg':
          await api.downloadYOLOWithImages(images, annotations, categories, 'annotations_yolo_seg.zip', true, includeImages);
          break;
        case 'yolo-bbox':
          await api.downloadYOLOWithImages(images, annotations, categories, 'annotations_yolo_bbox.zip', false, includeImages);
          break;
      }
    } catch (err: any) {
      setError(err.message || 'Export failed');
    } finally {
      setLoading(false);
    }
  }, [images, annotations, categories, setLoading, setError]);

  // Handle recover saved data
  const handleRecovery = useCallback(async (files: FileList) => {
    if (!pendingRecovery) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Upload images
      const uploadedImages: ImageInfo[] = [];
      for (const file of Array.from(files)) {
        if (!file.type.startsWith('image/')) continue;
        const imageInfo = await api.uploadImage(file);
        uploadedImages.push(imageInfo);
      }
      
      if (uploadedImages.length === 0) {
        setError('No valid image files found');
        setLoading(false);
        return;
      }
      
      // Match and restore annotations
      const result = matchAndRestoreAnnotations(
        pendingRecovery,
        uploadedImages.map(img => ({
          id: img.id,
          fileName: img.fileName,
          width: img.width,
          height: img.height
        }))
      );
      
      // Set images
      setImages(uploadedImages);
      
      // Set categories
      if (result.matchedCategories.length > 0) {
        setCategories(result.matchedCategories);
        setCurrentCategoryId(pendingRecovery.currentCategoryId || result.matchedCategories[0].id);
      }
      
      // Set annotations
      if (result.matchedAnnotations.length > 0) {
        setAnnotations(result.matchedAnnotations);
      }
      
      // Set current image
      if (result.currentImageId) {
        const targetImage = uploadedImages.find(img => img.id === result.currentImageId);
        if (targetImage) {
          setCurrentImage(targetImage);
        }
      }
      
      // Show recovery result
      if (result.unmatchedCount > 0) {
        setError(`Recovered ${result.matchedCount} annotations, ${result.unmatchedCount} annotations could not be recovered due to image mismatch`);
      } else {
        console.log(`[Recovery] Successfully recovered ${result.matchedCount} annotations`);
      }
      
      // Clear saved data and recovery state
      clearAutoSaveData();
      setPendingRecovery(null);
      
    } catch (err: any) {
      setError(err.message || 'Recovery failed');
    } finally {
      setLoading(false);
    }
  }, [pendingRecovery, setImages, setAnnotations, setCategories, setCurrentCategoryId, setCurrentImage, setLoading, setError]);

  // Handle discard saved data
  const handleDiscardRecovery = useCallback(() => {
    clearAutoSaveData();
    setPendingRecovery(null);
  }, []);

  // Setup keyboard shortcuts
  useKeyboardShortcuts({
    onConfirm: handleConfirm
  });

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      {/* Toast notifications */}
      <Toaster position="bottom-center" richColors closeButton />
      
      {/* Dataset bar (upload/export + image thumbnails) */}
      <ImageNavigator>
        <Toolbar 
          onExport={handleExport}
          onUploadImages={handleUploadImages}
        />
      </ImageNavigator>

      {/* Canvas toolbar (above canvas) */}
      <CanvasToolbar
        scale={canvasScale}
        onZoomIn={() => canvasRef.current?.zoomIn()}
        onZoomOut={() => canvasRef.current?.zoomOut()}
        onZoomFit={() => canvasRef.current?.zoomFit()}
        onZoom100={() => canvasRef.current?.zoom100()}
      />
      
      {/* Main content area */}
      <Box sx={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>
        {/* Canvas area */}
        <AnnotationCanvas ref={canvasRef} onSegmentRequest={handleConfirm} onScaleChange={setCanvasScale} />
        
        {/* ===== Right sidebar ===== */}
        <Paper
          square
          elevation={0}
          sx={{
            width: 320,
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            overflow: 'hidden',
            borderLeft: 1,
            borderColor: 'divider',
            boxShadow: '-1px 0 3px rgba(0,0,0,0.03)',
          }}
        >
          {/* Text prompt panel */}
          <TextPromptPanel onSubmit={handleTextSubmit} />
          
          {/* Annotation list */}
          <AnnotationList />
        </Paper>
      </Box>
      
      {/* Template status indicator */}
      <TemplateIndicator />
      
      {/* Auto-save status indicator */}
      <AutoSaveIndicator lastSavedAt={lastSavedAt} isSaving={isSaving} />
      
      {/* Loading overlay */}
      {isLoading && (
        <Backdrop
          open
          sx={{
            zIndex: (theme) => theme.zIndex.modal - 1,
            bgcolor: 'rgba(15, 23, 42, 0.25)',
            backdropFilter: 'blur(3px)',
          }}
        >
          <Paper
            elevation={8}
            sx={{
              px: 2.5,
              py: 2,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              border: 1,
              borderColor: 'divider',
            }}
          >
            <CircularProgress size={20} />
            <Typography variant="body2" fontWeight={500} color="text.secondary">
              Processing...
            </Typography>
          </Paper>
        </Backdrop>
      )}
      
      {/* Error toast (auto-dismiss) */}
      {error && <ErrorToast message={error} onDismiss={() => setError(null)} />}
      
      {/* Keyboard shortcuts modal */}
      <ShortcutsModal />
      
      {/* Recovery modal */}
      {pendingRecovery && (
        <RecoveryModal
          autoSaveData={pendingRecovery}
          onRecover={handleRecovery}
          onDiscard={handleDiscardRecovery}
        />
      )}
    </Box>
  );
}

/** Auto-dismissing error toast hook */
function ErrorToast({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  useEffect(() => {
    toast.error(message, { duration: 5000 });
    const timer = setTimeout(onDismiss, 5500);
    return () => clearTimeout(timer);
  }, [message, onDismiss]);
  return null;
}

export default App;
