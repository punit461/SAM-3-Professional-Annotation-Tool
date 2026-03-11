import { useState, type ReactNode } from 'react';
import {
  Hand,
  MousePointer2,
  Plus,
  Square,
  Brush,
  Slash,
  Type,
  Copy,
  Download,
  Undo2,
  Redo2,
  Trash2,
  Keyboard,
  Pentagon,
  ChevronDown,
  X,
  Upload,
  Image,
  SlidersHorizontal,
  FileJson,
  FileText,
  PlusCircle,
  Minus,
  ZoomIn,
  ZoomOut,
  Maximize,
  Eye,
  EyeOff,
  Sun,
  RotateCcw
} from 'lucide-react';
import {
  Box,
  Stack,
  Button,
  IconButton,
  Paper,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  Typography,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { useAnnotationStore } from '../store/annotationStore';
import type { AnnotationTool } from '../types';

export type ExportFormat = 'coco' | 'yolo-seg' | 'yolo-bbox';
export interface ExportOptions {
  format: ExportFormat;
  includeImages: boolean;
}

interface ToolBtnProps {
  tool: AnnotationTool;
  icon: ReactNode;
  label: string;
  shortcut: string;
  currentTool: AnnotationTool;
  onClick: (tool: AnnotationTool) => void;
}

function TooltipTitle({ label, shortcut }: { label: string; shortcut?: string }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="caption" sx={{ color: 'common.white' }}>
        {label}
      </Typography>
      {shortcut && (
        <Box
          sx={{
            px: 0.75,
            py: 0.125,
            borderRadius: 1,
            bgcolor: 'rgba(255,255,255,0.16)',
            color: 'common.white',
            fontSize: 10,
            lineHeight: 1.2,
            fontWeight: 700,
            letterSpacing: 0.2,
            fontFamily: 'monospace'
          }}
        >
          {shortcut}
        </Box>
      )}
    </Stack>
  );
}

function ToolBtn({ tool, icon, label, shortcut, currentTool, onClick }: ToolBtnProps) {
  const isActive = currentTool === tool;

  return (
    <Tooltip title={<TooltipTitle label={label} shortcut={shortcut} />} arrow>
      <IconButton
        onClick={() => onClick(tool)}
        aria-label={`${label} (${shortcut})`}
        size="small"
        sx={{
          width: 32,
          height: 32,
          borderRadius: 2,
          color: isActive ? 'common.white' : 'text.secondary',
          bgcolor: isActive ? 'primary.dark' : 'transparent',
          boxShadow: isActive ? '0 2px 8px rgba(39,39,42,0.28)' : 'none',
          '&:hover': {
            bgcolor: isActive ? 'primary.dark' : 'action.hover',
            color: isActive ? 'common.white' : 'text.primary'
          }
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}

function Sep() {
  return <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: 'divider' }} />;
}

interface ToolbarProps {
  onExport: (options: ExportOptions) => void;
  onUploadImages?: (files: File[]) => void;
}

export function Toolbar({ onExport, onUploadImages }: ToolbarProps) {
  const [exportAnchorEl, setExportAnchorEl] = useState<null | HTMLElement>(null);
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('coco');
  const [includeImages, setIncludeImages] = useState(true);

  const openExportMenu = Boolean(exportAnchorEl);

  const handleExportClick = (format: ExportFormat) => {
    setSelectedFormat(format);
    setExportAnchorEl(null);
    setShowExportDialog(true);
  };

  const handleConfirmExport = () => {
    setShowExportDialog(false);
    onExport({ format: selectedFormat, includeImages });
  };

  const formatIcons: Record<ExportFormat, ReactNode> = {
    coco: <FileJson size={16} color="#71717a" />,
    'yolo-seg': <FileText size={16} color="#22c55e" />,
    'yolo-bbox': <FileText size={16} color="#f59e0b" />
  };

  return (
    <>
      <Dialog open={showExportDialog} onClose={() => setShowExportDialog(false)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ pb: 1.5 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 700 }}>
              Export Settings
            </Typography>
            <IconButton size="small" onClick={() => setShowExportDialog(false)} aria-label="Close Export Settings">
              <X size={18} />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent sx={{ pt: '8px !important' }}>
          <Stack spacing={2.25}>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', mb: 0.5, display: 'block' }}>
                Format
              </Typography>
              <Paper variant="outlined" sx={{ px: 1.5, py: 1.25 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  {formatIcons[selectedFormat]}
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {selectedFormat === 'coco'
                      ? 'COCO Format'
                      : selectedFormat === 'yolo-seg'
                        ? 'YOLO Segmentation'
                        : 'YOLO Detection'}
                  </Typography>
                </Stack>
              </Paper>
            </Box>

            <Paper variant="outlined" sx={{ px: 1.25, py: 1 }}>
              <FormControlLabel
                sx={{ m: 0, width: '100%' }}
                control={
                  <Checkbox
                    checked={includeImages}
                    onChange={(e) => setIncludeImages(e.target.checked)}
                    size="small"
                    sx={{ mr: 0.5 }}
                  />
                }
                label={
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <Image size={18} color="#71717a" />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        Include Images
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Package images into ZIP file
                      </Typography>
                    </Box>
                  </Stack>
                }
              />
            </Paper>
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2.25, pt: 1.5 }}>
          <Button onClick={() => setShowExportDialog(false)} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirmExport} variant="contained" color="primary" startIcon={<Download size={15} />}>
            Export
          </Button>
        </DialogActions>
      </Dialog>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          pr: 1.5,
          mr: 0.5,
          borderRight: 1,
          borderColor: 'divider',
          flexShrink: 0
        }}
      >
        <Button
          component="label"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<Upload size={14} />}
          sx={{ textTransform: 'none', fontWeight: 600 }}
        >
          Upload
          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={(e) => {
              const fileList = e.target.files;
              if (fileList && onUploadImages) {
                onUploadImages(Array.from(fileList));
                e.target.value = '';
              }
            }}
          />
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<Download size={14} />}
          endIcon={<ChevronDown size={12} />}
          sx={{ textTransform: 'none', fontWeight: 600 }}
          onClick={(e) => setExportAnchorEl(exportAnchorEl ? null : e.currentTarget)}
        >
          Export
        </Button>

        <Menu
          anchorEl={exportAnchorEl}
          open={openExportMenu}
          onClose={() => setExportAnchorEl(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          sx={{ '& .MuiPaper-root': { minWidth: 220 } }}
        >
          {([
            { format: 'coco' as ExportFormat, label: 'COCO Format', ext: '.json' },
            { format: 'yolo-seg' as ExportFormat, label: 'YOLO Segmentation', ext: '.txt' },
            { format: 'yolo-bbox' as ExportFormat, label: 'YOLO Detection', ext: '.txt' }
          ]).map(({ format, label, ext }) => (
            <MenuItem key={format} onClick={() => handleExportClick(format)} sx={{ py: 1.1, gap: 1.1 }}>
              {formatIcons[format]}
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', flex: 1 }}>
                {label}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {ext}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    </>
  );
}

interface CanvasToolbarProps {
  scale: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomFit: () => void;
  onZoom100: () => void;
}

export function CanvasToolbar({ scale, onZoomIn, onZoomOut, onZoomFit, onZoom100 }: CanvasToolbarProps) {
  const [allVisible, setAllVisible] = useState(true);
  const [thresholdAnchorEl, setThresholdAnchorEl] = useState<null | HTMLElement>(null);
  const [enhancementAnchorEl, setEnhancementAnchorEl] = useState<null | HTMLElement>(null);

  const {
    currentTool,
    setCurrentTool,
    confidenceThreshold,
    setConfidenceThreshold,
    brushSize,
    setBrushSize,
    lineThickness,
    setLineThickness,
    drawMode,
    setDrawMode,
    brightness,
    contrast,
    enhancementMode,
    setBrightness,
    setContrast,
    setEnhancementMode,
    resetEnhancement,
    undo,
    redo,
    deleteSelectedAnnotations,
    clearAllAnnotations,
    setAllAnnotationsVisibility,
    selectedAnnotationIds,
    history,
    historyIndex,
    toggleShortcuts,
    annotations,
    currentImage
  } = useAnnotationStore();

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;
  const hasSelection = selectedAnnotationIds.length > 0;
  const hasAnnotations = currentImage ? annotations.some((a) => a.imageId === currentImage.id) : false;

  const handleClearAll = () => {
    if (window.confirm('Clear all annotations on the current image? This action can be undone.')) {
      clearAllAnnotations();
    }
  };

  const handleToggleAll = () => {
    const next = !allVisible;
    setAllVisible(next);
    setAllAnnotationsVisibility(next);
  };

  const showSizeSlider = currentTool === 'brush' || currentTool === 'line';
  const showDrawMode = currentTool === 'brush' || currentTool === 'polygon';

  return (
    <Paper
      square
      elevation={0}
      sx={{
        bgcolor: 'rgba(255,255,255,0.96)',
        borderBottom: 1,
        borderColor: 'divider',
        position: 'relative',
        zIndex: 40,
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
      }}
    >
      <Stack direction="row" alignItems="center" spacing={0.5} sx={{ px: 1.5, py: 0.75 }}>
        <Stack direction="row" spacing={0.25}>
          <ToolBtn
            tool="hand"
            icon={<Hand size={16} />}
            label="Pan"
            shortcut="H"
            currentTool={currentTool}
            onClick={setCurrentTool}
          />
          <ToolBtn
            tool="pointer"
            icon={<MousePointer2 size={16} />}
            label="Select"
            shortcut="V"
            currentTool={currentTool}
            onClick={setCurrentTool}
          />
        </Stack>

        <Sep />

        <Stack
          direction="row"
          spacing={0.25}
          alignItems="center"
          sx={{ bgcolor: 'rgba(82,82,91,0.08)', px: 0.75, py: 0.25, borderRadius: 2 }}
        >
          <Typography sx={{ fontSize: 10, fontWeight: 700, color: 'primary.main', px: 0.25 }}>
            AI
          </Typography>
          <ToolBtn
            tool="add-point"
            icon={<Plus size={16} />}
            label="Point"
            shortcut="P"
            currentTool={currentTool}
            onClick={setCurrentTool}
          />
          <ToolBtn
            tool="box"
            icon={<Square size={16} />}
            label="Box"
            shortcut="B"
            currentTool={currentTool}
            onClick={setCurrentTool}
          />
          <ToolBtn
            tool="text"
            icon={<Type size={16} />}
            label="Text"
            shortcut="T"
            currentTool={currentTool}
            onClick={setCurrentTool}
          />
          <ToolBtn
            tool="template"
            icon={<Copy size={16} />}
            label="Template"
            shortcut="M"
            currentTool={currentTool}
            onClick={setCurrentTool}
          />
        </Stack>

        <Sep />

        <Stack
          direction="row"
          spacing={0.25}
          alignItems="center"
          sx={{ bgcolor: 'action.hover', px: 0.75, py: 0.25, borderRadius: 2 }}
        >
          <Typography sx={{ fontSize: 10, fontWeight: 700, color: 'text.secondary', px: 0.25 }}>
            Draw
          </Typography>
          <ToolBtn
            tool="polygon"
            icon={<Pentagon size={16} />}
            label="Polygon"
            shortcut="G"
            currentTool={currentTool}
            onClick={setCurrentTool}
          />
          <ToolBtn
            tool="brush"
            icon={<Brush size={16} />}
            label="Brush"
            shortcut="R"
            currentTool={currentTool}
            onClick={setCurrentTool}
          />
          <ToolBtn
            tool="line"
            icon={<Slash size={16} />}
            label="Line"
            shortcut="L"
            currentTool={currentTool}
            onClick={setCurrentTool}
          />
        </Stack>

        {showDrawMode && (
          <>
            <Sep />
            <ToggleButtonGroup
              exclusive
              size="small"
              value={drawMode}
              onChange={(_, value: 'add' | 'remove' | null) => {
                if (value) setDrawMode(value);
              }}
              sx={{
                bgcolor: 'action.hover',
                p: 0.25,
                borderRadius: 2,
                '& .MuiToggleButton-root': {
                  border: 0,
                  px: 1,
                  py: 0.5,
                  textTransform: 'none',
                  color: 'text.secondary',
                  fontSize: 12,
                  fontWeight: 600,
                  '&.Mui-selected': {
                    bgcolor: 'primary.dark',
                    color: 'common.white'
                  }
                }
              }}
            >
              <ToggleButton value="add">
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <PlusCircle size={14} />
                  <span>Add</span>
                </Stack>
              </ToggleButton>
              <ToggleButton value="remove">
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Minus size={14} />
                  <span>Remove</span>
                </Stack>
              </ToggleButton>
            </ToggleButtonGroup>
          </>
        )}

        {showSizeSlider && (
          <Stack direction="row" spacing={1} alignItems="center" sx={{ ml: 1 }}>
            <Typography sx={{ fontSize: 10, fontWeight: 600, color: 'text.secondary' }}>
              {currentTool === 'brush' ? 'Size' : 'Width'}
            </Typography>
            <Slider
              size="small"
              min={1}
              max={currentTool === 'brush' ? 64 : 24}
              step={1}
              value={currentTool === 'brush' ? brushSize : lineThickness}
              onChange={(_, value) => {
                const next = Array.isArray(value) ? value[0] : value;
                if (currentTool === 'brush') setBrushSize(next);
                else setLineThickness(next);
              }}
              sx={{ width: 64 }}
            />
            <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'text.primary', minWidth: 20, textAlign: 'right' }}>
              {currentTool === 'brush' ? brushSize : lineThickness}
            </Typography>
          </Stack>
        )}

        <Sep />

        <Stack direction="row" spacing={0.25}>
          <Tooltip title={<TooltipTitle label="Undo" shortcut="Ctrl+Z" />} arrow>
            <span>
              <IconButton size="small" onClick={undo} disabled={!canUndo} aria-label="Undo">
                <Undo2 size={16} />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title={<TooltipTitle label="Redo" shortcut="Ctrl+Y" />} arrow>
            <span>
              <IconButton size="small" onClick={redo} disabled={!canRedo} aria-label="Redo">
                <Redo2 size={16} />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title={<TooltipTitle label="Delete Selected" shortcut="Del" />} arrow>
            <span>
              <IconButton
                size="small"
                onClick={deleteSelectedAnnotations}
                disabled={!hasSelection}
                aria-label="Delete Selected"
                sx={hasSelection ? { '&:hover': { color: 'error.main', bgcolor: 'rgba(239,68,68,0.08)' } } : {}}
              >
                <Trash2 size={16} />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title={<TooltipTitle label="Clear All" />} arrow>
            <IconButton
              size="small"
              onClick={handleClearAll}
              aria-label="Clear All"
              sx={{ '&:hover': { color: 'error.main', bgcolor: 'rgba(239,68,68,0.08)' } }}
            >
              <X size={16} />
            </IconButton>
          </Tooltip>
          <Tooltip title={<TooltipTitle label={allVisible ? 'Hide All Annotations' : 'Show All Annotations'} />} arrow>
            <span>
              <IconButton size="small" onClick={handleToggleAll} disabled={!hasAnnotations} aria-label="Toggle Visibility">
                {allVisible ? <Eye size={16} /> : <EyeOff size={16} />}
              </IconButton>
            </span>
          </Tooltip>
        </Stack>

        <Sep />

        <Tooltip title={<TooltipTitle label="Confidence Threshold" />} arrow>
          <Button
            size="small"
            variant="text"
            color="secondary"
            startIcon={<SlidersHorizontal size={14} />}
            onClick={(e) => setThresholdAnchorEl(e.currentTarget)}
            sx={{ textTransform: 'none', fontWeight: 600, minWidth: 'auto' }}
          >
            {`${(confidenceThreshold * 100).toFixed(0)}%`}
          </Button>
        </Tooltip>

        <Tooltip title={<TooltipTitle label="Image Enhancement" />} arrow>
          <IconButton size="small" onClick={(e) => setEnhancementAnchorEl(e.currentTarget)} aria-label="Image Enhancement">
            <Sun size={16} />
          </IconButton>
        </Tooltip>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.25,
            bgcolor: 'action.hover',
            borderRadius: 2,
            px: 0.5,
            py: 0.25
          }}
        >
          <Tooltip title={<TooltipTitle label="Zoom Out" />} arrow>
            <IconButton size="small" onClick={onZoomOut} aria-label="Zoom Out">
              <ZoomOut size={15} />
            </IconButton>
          </Tooltip>
          <Typography sx={{ fontSize: 10, fontWeight: 700, color: 'text.secondary', minWidth: 44, textAlign: 'center' }}>
            {`${Math.round(scale * 100)}%`}
          </Typography>
          <Tooltip title={<TooltipTitle label="Zoom In" />} arrow>
            <IconButton size="small" onClick={onZoomIn} aria-label="Zoom In">
              <ZoomIn size={15} />
            </IconButton>
          </Tooltip>
          <Tooltip title={<TooltipTitle label="Fit to View" />} arrow>
            <IconButton size="small" onClick={onZoomFit} aria-label="Fit">
              <Maximize size={14} />
            </IconButton>
          </Tooltip>
          <Tooltip title={<TooltipTitle label="Actual Size (100%)" />} arrow>
            <Button
              size="small"
              variant="text"
              color="secondary"
              onClick={onZoom100}
              aria-label="100%"
              sx={{ fontSize: 10, minWidth: 'auto', px: 0.75, fontWeight: 700 }}
            >
              1:1
            </Button>
          </Tooltip>
        </Box>

        <Box sx={{ flex: 1 }} />

        <Tooltip title={<TooltipTitle label="Keyboard Shortcuts" shortcut="?" />} arrow>
          <IconButton size="small" onClick={toggleShortcuts} aria-label="Keyboard Shortcuts">
            <Keyboard size={16} />
          </IconButton>
        </Tooltip>
      </Stack>

      <Menu
        anchorEl={thresholdAnchorEl}
        open={Boolean(thresholdAnchorEl)}
        onClose={() => setThresholdAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Box sx={{ p: 1.5, width: 220 }}>
          <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.primary', mb: 1 }}>
            Confidence Threshold
          </Typography>
          <Slider
            size="small"
            min={0}
            max={1}
            step={0.05}
            value={confidenceThreshold}
            onChange={(_, value) => setConfidenceThreshold(Array.isArray(value) ? value[0] : value)}
          />
          <Typography sx={{ fontSize: 11, color: 'text.secondary', textAlign: 'center', mt: 0.5 }}>
            {`${(confidenceThreshold * 100).toFixed(0)}%`}
          </Typography>
        </Box>
      </Menu>

      <Menu
        anchorEl={enhancementAnchorEl}
        open={Boolean(enhancementAnchorEl)}
        onClose={() => setEnhancementAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Box sx={{ p: 1.5, width: 240 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.25 }}>
            <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.primary' }}>Enhancement</Typography>
            <Tooltip title={<TooltipTitle label="Reset" />} arrow>
              <IconButton size="small" onClick={resetEnhancement} aria-label="Reset">
                <RotateCcw size={13} />
              </IconButton>
            </Tooltip>
          </Stack>

          <Stack spacing={1.25}>
            <Box>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 0.25 }}>
                <Typography sx={{ fontSize: 11, fontWeight: 600, color: 'text.secondary' }}>Brightness</Typography>
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'text.secondary',
                    bgcolor: 'action.hover',
                    px: 0.75,
                    py: 0.125,
                    borderRadius: 1
                  }}
                >
                  {brightness}
                </Typography>
              </Stack>
              <Slider size="small" min={-100} max={100} value={brightness} onChange={(_, value) => setBrightness(Array.isArray(value) ? value[0] : value)} />
            </Box>

            <Box>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 0.25 }}>
                <Typography sx={{ fontSize: 11, fontWeight: 600, color: 'text.secondary' }}>Contrast</Typography>
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'text.secondary',
                    bgcolor: 'action.hover',
                    px: 0.75,
                    py: 0.125,
                    borderRadius: 1
                  }}
                >
                  {contrast}
                </Typography>
              </Stack>
              <Slider size="small" min={-100} max={100} value={contrast} onChange={(_, value) => setContrast(Array.isArray(value) ? value[0] : value)} />
            </Box>

            <Box>
              <Typography sx={{ fontSize: 11, fontWeight: 600, color: 'text.secondary', mb: 0.5 }}>Mode</Typography>
              <ToggleButtonGroup
                exclusive
                size="small"
                value={enhancementMode}
                onChange={(_, mode: 'none' | 'auto' | 'histogram' | null) => {
                  if (mode) setEnhancementMode(mode);
                }}
                sx={{
                  '& .MuiToggleButton-root': {
                    textTransform: 'none',
                    fontSize: 11,
                    px: 1,
                    py: 0.4,
                    color: 'text.secondary',
                    '&.Mui-selected': {
                      bgcolor: 'primary.dark',
                      color: 'common.white'
                    }
                  }
                }}
              >
                <ToggleButton value="none">None</ToggleButton>
                <ToggleButton value="auto">Auto</ToggleButton>
                <ToggleButton value="histogram">Hist</ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Stack>
        </Box>
      </Menu>
    </Paper>
  );
}
