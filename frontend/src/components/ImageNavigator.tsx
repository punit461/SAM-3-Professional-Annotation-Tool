import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Image, X } from 'lucide-react';
import { Box, CircularProgress, IconButton, Paper, Stack, Typography } from '@mui/material';
import { useAnnotationStore } from '../store/annotationStore';

export function ImageNavigator({ children }: { children?: React.ReactNode }) {
  const {
    images,
    currentImage,
    setCurrentImage,
    removeImage,
    annotations
  } = useAnnotationStore();

  // Track loaded images
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  const handleImageLoad = useCallback((imageId: string) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  }, []);

  const handleImageError = useCallback((imageId: string) => {
    setErrorImages(prev => new Set(prev).add(imageId));
  }, []);

  if (images.length === 0) {
    return (
      <Paper
        square
        elevation={0}
        sx={{
          position: 'relative',
          zIndex: 50,
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 1.5, py: 0.75 }}>
          {children}
        </Stack>
      </Paper>
    );
  }

  const currentIndex = currentImage 
    ? images.findIndex(img => img.id === currentImage.id)
    : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentImage(images[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentImage(images[currentIndex + 1]);
    }
  };

  const getAnnotationCount = (imageId: string) => {
    return annotations.filter(a => a.imageId === imageId).length;
  };

  return (
    <Paper
      square
      elevation={0}
      sx={{
        position: 'relative',
        zIndex: 50,
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 1.5, py: 0.75 }}>
        {/* File ops (upload/export) injected from parent */}
        {children}

        {/* Navigation buttons */}
        <IconButton
          onClick={goToPrevious}
          disabled={currentIndex <= 0}
          size="small"
          sx={{
            width: 28,
            height: 28,
            color: 'text.secondary',
          }}
        >
          <ChevronLeft size={16} />
        </IconButton>

        {/* Image thumbnail list */}
        <Box sx={{ flex: 1, overflowX: 'auto' }}>
          <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
            {images.map((img, idx) => {
              const isActive = currentImage?.id === img.id;
              const annotationCount = getAnnotationCount(img.id);
              const isLoaded = loadedImages.has(img.id);
              const hasError = errorImages.has(img.id);
              
              return (
                <Box
                  key={img.id}
                  sx={{
                    position: 'relative',
                    flexShrink: 0,
                    cursor: 'pointer',
                    borderRadius: 1,
                    overflow: 'hidden',
                    border: isActive ? 2 : 1,
                    borderColor: isActive ? 'primary.main' : 'divider',
                    boxShadow: isActive ? 2 : 0,
                    '&:hover': {
                      borderColor: 'primary.light',
                      boxShadow: 1,
                    },
                  }}
                  onClick={() => setCurrentImage(img)}
                >
                  {/* Loading skeleton */}
                  {!isLoaded && !hasError && (
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        width: 64,
                        height: 48,
                        bgcolor: 'grey.100',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CircularProgress size={20} />
                    </Box>
                  )}
                  
                  {/* Loading error indicator */}
                  {hasError && (
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        width: 64,
                        height: 48,
                        bgcolor: 'error.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <X size={16} color="#d32f2f" />
                    </Box>
                  )}
                  
                  <img
                    src={img.url}
                    alt={img.fileName}
                    style={{
                      width: 64,
                      height: 48,
                      objectFit: 'cover',
                      opacity: isLoaded ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      display: 'block',
                    }}
                    onLoad={() => handleImageLoad(img.id)}
                    onError={() => handleImageError(img.id)}
                  />
                  
                  {/* Index label */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 2,
                      left: 2,
                      px: 0.75,
                      py: 0.25,
                      borderRadius: 0.75,
                      bgcolor: 'rgba(0,0,0,0.5)',
                      color: '#fff',
                      fontSize: 10,
                    }}
                  >
                    {idx + 1}
                  </Box>
                  
                  {/* Annotation count */}
                  {annotationCount > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 2,
                        right: 2,
                        px: 0.75,
                        py: 0.25,
                        borderRadius: 999,
                        bgcolor: 'primary.main',
                        color: '#fff',
                        fontSize: 10,
                        fontWeight: 600,
                      }}
                    >
                      {annotationCount}
                    </Box>
                  )}
                  
                  {/* Delete button */}
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(img.id);
                    }}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 2,
                      right: 2,
                      width: 18,
                      height: 18,
                      borderRadius: 0.75,
                      bgcolor: 'rgba(211,47,47,0.8)',
                      color: '#fff',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      '.MuiBox-root:hover &': {
                        opacity: 1,
                      },
                      '&:hover': {
                        bgcolor: 'error.main',
                      },
                    }}
                  >
                    <X size={12} />
                  </IconButton>
                </Box>
              );
            })}
          </Stack>
        </Box>

        <IconButton
          onClick={goToNext}
          disabled={currentIndex >= images.length - 1}
          size="small"
          sx={{
            width: 28,
            height: 28,
            color: 'text.secondary',
          }}
        >
          <ChevronRight size={16} />
        </IconButton>

        {/* Progress indicator */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            pl: 1.5,
            borderLeft: 1,
            borderColor: 'divider',
            fontSize: 12,
            color: 'text.secondary',
            fontWeight: 500,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          <Image size={14} />
          <Typography variant="caption" sx={{ fontSize: 12, color: 'text.secondary' }}>
            {currentIndex + 1}/{images.length}
          </Typography>
          {loadedImages.size < images.length && (
            <Typography variant="caption" sx={{ fontSize: 10, color: 'primary.main' }}>
              Loading {loadedImages.size}/{images.length}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
}
