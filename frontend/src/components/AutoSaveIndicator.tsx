import { Cloud, CloudOff, Loader2 } from 'lucide-react';
import { Box, Paper, Stack, Typography } from '@mui/material';

interface AutoSaveIndicatorProps {
  lastSavedAt: Date | null;
  isSaving: boolean;
}

export function AutoSaveIndicator({ lastSavedAt, isSaving }: AutoSaveIndicatorProps) {
  // Don't show if never saved
  if (!lastSavedAt && !isSaving) {
    return null;
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 30 }}>
      <Paper
        elevation={4}
        sx={{
          px: 1.5,
          py: 0.75,
          borderRadius: 1.5,
          bgcolor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
        {isSaving ? (
          <>
            <Box sx={{ '@keyframes spin': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } }, animation: 'spin 1s linear infinite', display: 'inline-flex' }}>
              <Loader2 size={13} color="#1976d2" />
            </Box>
            <Typography variant="caption" color="text.secondary">Saving...</Typography>
          </>
        ) : lastSavedAt ? (
          <>
            <Cloud size={13} color="#10b981" />
            <Typography variant="caption" color="text.secondary">
              Auto-saved at {formatTime(lastSavedAt)}
            </Typography>
          </>
        ) : (
          <>
            <CloudOff size={13} color="#94a3b8" />
            <Typography variant="caption" color="text.disabled">Not saved</Typography>
          </>
        )}
        </Stack>
      </Paper>
    </Box>
  );
}
