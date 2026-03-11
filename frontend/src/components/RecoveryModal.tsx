import { useState, useRef } from 'react';
import { FolderOpen, RefreshCw, Trash2, AlertCircle } from 'lucide-react';
import { Box, Button, Dialog, DialogContent, Stack, Typography } from '@mui/material';
import type { AutoSaveData } from '../types';

interface RecoveryModalProps {
  autoSaveData: AutoSaveData;
  onRecover: (files: FileList) => void;
  onDiscard: () => void;
}

export function RecoveryModal({ autoSaveData, onRecover, onDiscard }: RecoveryModalProps) {
  const [isSelecting, setIsSelecting] = useState(false);
  const folderInputRef = useRef<HTMLInputElement>(null);

  const savedDate = new Date(autoSaveData.savedAt);
  const formattedDate = savedDate.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handleSelectFolder = () => {
    folderInputRef.current?.click();
  };

  const handleFolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setIsSelecting(true);
      onRecover(files);
    }
  };

  return (
    <Dialog open maxWidth="sm" fullWidth>
      <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
        {/* Header */}
        <Box sx={{ background: 'linear-gradient(90deg, #1976d2 0%, #1565c0 100%)', px: 3, py: 2 }}>
          <Stack direction="row" alignItems="center" spacing={1.5} color="#fff">
            <AlertCircle size={22} />
            <Typography variant="h6" fontWeight={700}>Unsaved Work Found</Typography>
          </Stack>
        </Box>

        {/* Content */}
        <DialogContent sx={{ p: 3 }}>
          <Box sx={{ bgcolor: 'rgba(25,118,210,0.08)', border: 1, borderColor: 'rgba(25,118,210,0.2)', borderRadius: 1.5, p: 2, mb: 2 }}>
            <Typography variant="body2" color="primary.dark" sx={{ mb: 1 }}>
              Last saved: <Box component="span" sx={{ fontWeight: 600 }}>{formattedDate}</Box>
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography variant="caption" color="primary.main" fontWeight={600}>{autoSaveData.images.length} images</Typography>
              <Typography variant="caption" color="primary.main" fontWeight={600}>{autoSaveData.annotations.length} annotations</Typography>
              <Typography variant="caption" color="primary.main" fontWeight={600}>{autoSaveData.categories.length} categories</Typography>
            </Stack>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            To recover your work, please select the <strong>same image folder</strong>. The system will automatically match and restore annotations based on filenames.
          </Typography>

          {/* Image list preview */}
          {autoSaveData.images.length > 0 && (
            <Box sx={{ bgcolor: 'rgba(148,163,184,0.08)', borderRadius: 1, p: 1.5, mb: 2, maxHeight: 128, overflowY: 'auto' }}>
              <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ mb: 1, display: 'block' }}>
                Required image files:
              </Typography>
              <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
                {autoSaveData.images.slice(0, 10).map((img, idx) => (
                  <Box
                    key={idx}
                    sx={{ fontSize: 10, bgcolor: 'grey.100', color: 'text.secondary', px: 1, py: 0.25, borderRadius: 0.75 }}
                  >
                    {img.fileName}
                  </Box>
                ))}
                {autoSaveData.images.length > 10 && (
                  <Typography variant="caption" sx={{ fontSize: 10, color: 'text.disabled' }}>
                    ...and {autoSaveData.images.length - 10} more
                  </Typography>
                )}
              </Stack>
            </Box>
          )}

          {/* Hidden file input */}
          <input
            ref={folderInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/bmp"
            onChange={handleFolderChange}
            style={{ display: 'none' }}
            multiple
            {...{ webkitdirectory: '', directory: '' } as any}
          />

          {/* Buttons */}
          <Stack direction="row" spacing={1.5}>
            <Button
              onClick={handleSelectFolder}
              disabled={isSelecting}
              variant="contained"
              fullWidth
              sx={{ py: 1.25 }}
              startIcon={isSelecting ? <RefreshCw size={16} /> : <FolderOpen size={16} />}
            >
              {isSelecting ? 'Recovering...' : 'Select Folder & Recover'}
            </Button>
            <Button
              onClick={onDiscard}
              disabled={isSelecting}
              variant="outlined"
              sx={{ py: 1.25, minWidth: 120 }}
              startIcon={<Trash2 size={18} />}
              title="Discard saved data"
            >
              Discard
            </Button>
          </Stack>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
