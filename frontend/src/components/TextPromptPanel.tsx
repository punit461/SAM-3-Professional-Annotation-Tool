import { useState, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { Box, Button, Chip, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { useAnnotationStore } from '../store/annotationStore';

interface TextPromptPanelProps {
  onSubmit: (prompt: string) => void;
}

export function TextPromptPanel({ onSubmit }: TextPromptPanelProps) {
  const { textPrompt, setTextPrompt, currentTool, setCurrentTool, isLoading } = useAnnotationStore();
  const [localPrompt, setLocalPrompt] = useState(textPrompt);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localPrompt.trim()) {
      setTextPrompt(localPrompt.trim());
      onSubmit(localPrompt.trim());
    }
  };

  const handleClose = () => {
    setLocalPrompt('');
    setTextPrompt('');
    setCurrentTool('pointer'); // Switch to pointer tool to close panel
  };

  const handleClear = () => {
    setLocalPrompt('');
    setTextPrompt('');
  };

  // Listen for Escape key to close panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && currentTool === 'text') {
        handleClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentTool]);

  if (currentTool !== 'text') {
    return null;
  }

  return (
    <Box sx={{ position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
      <Paper
        elevation={6}
        sx={{
          p: 2.5,
          minWidth: 440,
          borderRadius: 2,
          bgcolor: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Title bar */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box sx={{ p: 0.75, bgcolor: 'primary.50', borderRadius: 1 }}>
              <Sparkles size={14} color="#1976d2" />
            </Box>
            <Typography variant="body2" fontWeight={600} color="text.primary">
              Text Prompt
            </Typography>
            <Chip label="Describe to segment" size="small" sx={{ height: 20, fontSize: 10 }} />
          </Stack>
          <IconButton
            type="button"
            onClick={handleClose}
            title="Close (Esc)"
            size="small"
          >
            <X size={16} />
          </IconButton>
        </Stack>
        
        {/* Input form */}
        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={1.25}>
            <Box sx={{ flex: 1, position: 'relative' }}>
              <TextField
                fullWidth
                value={localPrompt}
                onChange={(e) => setLocalPrompt(e.target.value)}
                placeholder="e.g., red car, person in white, cat..."
                autoFocus
                disabled={isLoading}
                size="small"
              />
              {localPrompt && (
                <IconButton
                  type="button"
                  onClick={handleClear}
                  title="Clear text"
                  size="small"
                  sx={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)' }}
                >
                  <X size={18} />
                </IconButton>
              )}
            </Box>
            <Button
              type="submit"
              disabled={!localPrompt.trim() || isLoading}
              variant="contained"
              sx={{ px: 2.5, minWidth: 116 }}
              startIcon={<Send size={16} />}
            >
              Segment
            </Button>
          </Stack>
        </form>
        
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1.5 }}>
          <Chip label="Enter" size="small" sx={{ height: 18, fontSize: 10 }} />
          <Typography variant="caption" sx={{ fontSize: 10 }}>Confirm</Typography>
          <Typography variant="caption" color="text.disabled">|</Typography>
          <Chip label="Esc" size="small" sx={{ height: 18, fontSize: 10 }} />
          <Typography variant="caption" sx={{ fontSize: 10 }}>Close</Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
