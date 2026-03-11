import { X, Play, Image } from 'lucide-react';
import { Box, Button, Chip, Paper, Stack, Typography } from '@mui/material';
import { useAnnotationStore } from '../store/annotationStore';
import { useEffect, useRef, useState, useCallback } from 'react';
import { segmentWithTemplate } from '../services/api';

/**
 * Template status indicator
 * Displays the currently selected template thumbnail and action buttons
 */
export function TemplateIndicator() {
  const {
    templateImage,
    templateBox,
    currentTool,
    currentImage,
    confidenceThreshold,
    currentCategoryId,
    categories,
    setTemplateImage,
    setTemplateBox,
    setPreviewMask,
    setLoading,
    setError,
    addAnnotations,
  } = useAnnotationStore();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  // Generate thumbnail when template changes
  useEffect(() => {
    if (!templateImage || !templateBox) {
      setThumbnailUrl(null);
      return;
    }

    // Generate thumbnail from template image and selected box region
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Calculate crop region
      const { x1, y1, x2, y2 } = templateBox;
      const cropWidth = x2 - x1;
      const cropHeight = y2 - y1;

      // Set thumbnail size (max 80px)
      const maxSize = 80;
      const scale = Math.min(maxSize / cropWidth, maxSize / cropHeight, 1);
      const thumbWidth = Math.round(cropWidth * scale);
      const thumbHeight = Math.round(cropHeight * scale);

      canvas.width = thumbWidth;
      canvas.height = thumbHeight;

      // Draw cropped region
      ctx.drawImage(
        img,
        x1, y1, cropWidth, cropHeight,
        0, 0, thumbWidth, thumbHeight
      );

      setThumbnailUrl(canvas.toDataURL('image/jpeg', 0.8));
    };
    img.src = templateImage.url;
  }, [templateImage, templateBox]);

  // Clear template
  const clearTemplate = () => {
    setTemplateImage(null);
    setTemplateBox(null);
  };

  // Apply template - batch detect and add all similar objects (same-image only)
  const applyTemplate = useCallback(async () => {
    if (!currentImage || !templateImage || !templateBox) return;
    if (currentImage.isLocalOnly) {
      setError('Please ensure image is uploaded to backend first');
      return;
    }
    
    // Check if same image
    if (currentImage.id !== templateImage.id) {
      setError('Template feature only supports same-image detection. For cross-image detection, use "Text Tool".');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const results = await segmentWithTemplate(
        currentImage.id,
        templateImage.id,
        templateBox,
        confidenceThreshold
      );

      console.log(`[applyTemplate] Found ${results.length} similar objects`);

      if (results.length > 0) {
        // Get current category info
        const category = categories.find(c => c.id === currentCategoryId);
        const categoryName = category?.name || 'object';

        // Convert all results to annotations
        const annotationsToAdd = results.map(result => ({
          imageId: currentImage.id,
          categoryId: currentCategoryId,
          categoryName,
          segmentation: result.mask_rle,
          bbox: result.box as [number, number, number, number],
          score: result.score,
          area: result.area,
        }));

        // Batch add all annotations
        addAnnotations(annotationsToAdd);
        
        // Clear preview
        setPreviewMask(null);
        
        // Show success message
        console.log(`[applyTemplate] Added ${results.length} annotations`);
      } else {
        setError('No similar objects found');
        setPreviewMask(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Template matching failed');
    } finally {
      setLoading(false);
    }
  }, [currentImage, templateImage, templateBox, confidenceThreshold, currentCategoryId, categories, setLoading, setError, setPreviewMask, addAnnotations]);

  // Only show when template tool is active
  if (currentTool !== 'template') {
    return null;
  }

  return (
    <Box sx={{ position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 50 }}>
      <Paper
        elevation={6}
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderRadius: 2,
          bgcolor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Template status */}
        {templateImage && templateBox ? (
          <>
            {/* Thumbnail */}
            <Box sx={{ position: 'relative' }}>
              <canvas ref={canvasRef} style={{ display: 'none' }} />
              {thumbnailUrl ? (
                <img 
                  src={thumbnailUrl} 
                  alt="Template thumbnail"
                  style={{
                    width: 64,
                    height: 64,
                    objectFit: 'cover',
                    borderRadius: 8,
                    border: '2px solid #42a5f5',
                    display: 'block',
                  }}
                />
              ) : (
                <Box sx={{ width: 64, height: 64, bgcolor: 'primary.50', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image size={24} color="#42a5f5" />
                </Box>
              )}
              <Box sx={{ position: 'absolute', top: -8, right: -8, width: 20, height: 20, borderRadius: '50%', bgcolor: 'success.main', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>
                ✓
              </Box>
            </Box>

            {/* Info */}
            <Stack spacing={0.25}>
              <Typography variant="body2" fontWeight={600} color="primary.dark">Template Selected</Typography>
              <Typography variant="caption" color="primary.main">
                From: {templateImage.fileName.length > 15 
                  ? templateImage.fileName.slice(0, 15) + '...' 
                  : templateImage.fileName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {Math.round(templateBox.x2 - templateBox.x1)} × {Math.round(templateBox.y2 - templateBox.y1)} px
              </Typography>
              {/* Cross-image warning */}
              {currentImage && currentImage.id !== templateImage.id && (
                <Typography variant="caption" color="warning.dark" fontWeight={600}>
                  For cross-image use Text tool
                </Typography>
              )}
            </Stack>

            {/* Action buttons */}
            <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
              {currentImage && currentImage.id === templateImage.id && (
                <Button
                  onClick={applyTemplate}
                  variant="contained"
                  size="small"
                  startIcon={<Play size={16} />}
                  title="Apply Template (Enter)"
                >
                  Apply
                </Button>
              )}
              <Button
                onClick={clearTemplate}
                variant="outlined"
                size="small"
                startIcon={<X size={16} />}
                title="Clear Template (Escape)"
              >
                Clear
              </Button>
            </Stack>
          </>
        ) : (
          <>
            {/* No template message */}
            <Stack direction="row" alignItems="center" spacing={1.5} color="primary.main">
              <Box sx={{ width: 48, height: 48, bgcolor: 'primary.50', borderRadius: 1, border: 2, borderStyle: 'dashed', borderColor: 'primary.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image size={24} color="#42a5f5" />
              </Box>
              <Stack spacing={0.25}>
                <Typography variant="body2" fontWeight={600}>No Template Selected</Typography>
                <Typography variant="caption" color="text.secondary">Draw a box on image to create template</Typography>
              </Stack>
            </Stack>
          </>
        )}

        {/* Help tips */}
        <Box sx={{ borderLeft: 1, borderColor: 'divider', pl: 2, ml: 1 }}>
          <Stack spacing={0.4}>
            <Typography variant="caption" color="text.secondary"><strong>1.</strong> Draw box to create template</Typography>
            <Typography variant="caption" color="text.secondary"><strong>2.</strong> Press Enter to find similar objects</Typography>
            <Chip label="Same-image detection only" size="small" color="warning" sx={{ height: 18, fontSize: 10, alignSelf: 'flex-start' }} />
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
