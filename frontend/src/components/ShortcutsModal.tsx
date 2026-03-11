import { X, Keyboard } from 'lucide-react';
import { Box, Button, Chip, Dialog, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from '@mui/material';
import { useAnnotationStore } from '../store/annotationStore';
import { formatShortcut, getDisplayShortcuts } from '../hooks/useKeyboardShortcuts';

export function ShortcutsModal() {
  const { showShortcuts, toggleShortcuts, shortcutOverrides, setShortcutOverride, resetShortcutOverrides } = useAnnotationStore();

  if (!showShortcuts) {
    return null;
  }

  const shortcutList = getDisplayShortcuts(shortcutOverrides);

  // Group shortcuts by category
  const shortcutGroups = {
    'Tools': shortcutList.filter(s => s.action.startsWith('tool-')),
    'Edit': shortcutList.filter(s => ['undo', 'redo', 'delete'].includes(s.action)),
    'Selection': shortcutList.filter(s => ['select-all', 'deselect-all', 'cancel', 'confirm'].includes(s.action)),
    'Categories': shortcutList.filter(s => s.action.startsWith('category-')),
    'Other': shortcutList.filter(s => ['save', 'show-shortcuts'].includes(s.action)),
  };

  return (
    <Dialog
      open
      onClose={toggleShortcuts}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          maxHeight: '80vh',
        }
      }}
    >
        {/* Header */}
        <DialogTitle sx={{ px: 2.5, py: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ p: 1, bgcolor: 'rgba(25,118,210,0.08)', borderRadius: 1.5 }}>
                <Keyboard size={18} color="#1976d2" />
              </Box>
              <Typography variant="h6" sx={{ fontSize: 16 }}>Keyboard Shortcuts</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Button
              onClick={resetShortcutOverrides}
              size="small"
              variant="text"
            >
              Reset Keys
              </Button>
              <IconButton
              onClick={toggleShortcuts}
              size="small"
            >
              <X size={18} />
              </IconButton>
            </Stack>
          </Stack>
        </DialogTitle>

        {/* Content */}
        <DialogContent sx={{ p: 2.5, overflowY: 'auto' }}>
          {/* Mouse operations guide */}
          <Box sx={{ mb: 3, p: 2, bgcolor: 'rgba(25,118,210,0.06)', borderRadius: 1.5, border: 1, borderColor: 'rgba(25,118,210,0.2)' }}>
            <Typography variant="subtitle2" sx={{ fontSize: 11, color: 'primary.main', mb: 1.5, textTransform: 'uppercase', letterSpacing: 0.8 }}>
              Point Segmentation Guide (Press P to toggle)
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="body2" color="text.secondary">Positive Point - Select Object</Typography>
                <Chip label="Left Click" size="small" color="success" sx={{ height: 22, fontSize: 11 }} />
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="body2" color="text.secondary">Negative Point - Exclude Area</Typography>
                <Chip label="Right Click" size="small" color="error" sx={{ height: 22, fontSize: 11 }} />
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="body2" color="text.secondary">Confirm Segmentation</Typography>
                <Chip label="Enter" size="small" color="primary" sx={{ height: 22, fontSize: 11 }} />
              </Stack>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="body2" color="text.secondary">Cancel / Clear Points</Typography>
                <Chip label="Esc" size="small" sx={{ height: 22, fontSize: 11 }} />
              </Stack>
            </Stack>
            <Box sx={{ mt: 1.5, pt: 1.5, borderTop: 1, borderColor: 'rgba(25,118,210,0.2)' }}>
              <Typography variant="caption" color="primary.main">
                Workflow: Left click on object → Right click to exclude → Press Enter when satisfied
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            {Object.entries(shortcutGroups).map(([group, shortcuts]) => (
              <Box key={group}>
                <Typography variant="subtitle2" sx={{ fontSize: 11, color: 'text.secondary', mb: 1.5, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                  {group}
                </Typography>
                <Stack spacing={0.5} sx={{ bgcolor: 'rgba(148,163,184,0.08)', borderRadius: 1.5, p: 1.5 }}>
                  {shortcuts.map((shortcut, idx) => (
                    <Stack
                      key={idx}
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ py: 0.5 }}
                    >
                      <Typography variant="body2" color="text.secondary">{shortcut.description}</Typography>
                      {group === 'Tools' ? (
                        <TextField
                          value={shortcut.key}
                          onChange={(event) => {
                            const value = event.target.value.trim().toLowerCase();
                            if (value.length <= 1) {
                              setShortcutOverride(shortcut.action, value);
                            }
                          }}
                          inputProps={{ maxLength: 1, style: { textAlign: 'center', width: 24 } }}
                          size="small"
                          sx={{ width: 56 }}
                        />
                      ) : (
                        <Chip
                          label={formatShortcut(shortcut)}
                          size="small"
                          sx={{ height: 22, fontSize: 11 }}
                        />
                      )}
                    </Stack>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        </DialogContent>

        {/* Footer */}
        <Box sx={{ px: 2.5, py: 1.5, borderTop: 1, borderColor: 'divider', bgcolor: 'rgba(148,163,184,0.08)' }}>
          <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', display: 'block' }}>
            Press <Chip component="span" label="?" size="small" sx={{ height: 18, fontSize: 10, mx: 0.5 }} /> or
            <Chip component="span" label="Ctrl + /" size="small" sx={{ height: 18, fontSize: 10, mx: 0.5 }} />
            to view this help anytime
          </Typography>
        </Box>
    </Dialog>
  );
}
