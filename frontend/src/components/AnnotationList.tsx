import { useState } from 'react';
import {
  Eye,
  EyeOff,
  Trash2,
  ChevronDown,
  ChevronRight,
  Plus,
  X,
  Edit2,
  Check,
  Tag,
  Layers,
  FolderOpen
} from 'lucide-react';
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  TextField,
  Chip,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  Divider,
  Tooltip
} from '@mui/material';
import { useAnnotationStore, COLOR_PALETTE } from '../store/annotationStore';

export function AnnotationList() {
  const {
    annotations,
    currentImage,
    selectedAnnotationIds,
    selectAnnotation,
    toggleAnnotationVisibility,
    setAllAnnotationsVisibility,
    deleteAnnotation,
    updateAnnotation,
    categories,
    currentCategoryId,
    setCurrentCategoryId,
    addCategory,
    deleteCategory,
    updateCategory
  } = useAnnotationStore();

  const currentAnnotations = currentImage
    ? annotations.filter(ann => ann.imageId === currentImage.id)
    : [];

  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState(COLOR_PALETTE[0]);
  const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState('');
  const [showColorPicker, setShowColorPicker] = useState<number | 'new' | null>(null);
  const [changingCategoryAnnotationId, setChangingCategoryAnnotationId] = useState<string | null>(null);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(null);

  const handleChangeAnnotationCategory = (annotationId: string, newCategoryId: number) => {
    const newCategory = categories.find(c => c.id === newCategoryId);
    if (newCategory) {
      updateAnnotation(annotationId, {
        categoryId: newCategoryId,
        categoryName: newCategory.name,
        color: newCategory.color
      });
    }
    setChangingCategoryAnnotationId(null);
  };

  const handleAnnotationClick = (annotationId: string, index: number, event: React.MouseEvent) => {
    const isCtrlOrMeta = event.ctrlKey || event.metaKey;
    const isShift = event.shiftKey;

    if (isShift && lastSelectedIndex !== null) {
      const start = Math.min(lastSelectedIndex, index);
      const end = Math.max(lastSelectedIndex, index);
      const rangeIds = currentAnnotations.slice(start, end + 1).map(ann => ann.id);

      rangeIds.forEach((id, idx) => {
        selectAnnotation(id, idx > 0);
      });
    } else {
      selectAnnotation(annotationId, isCtrlOrMeta);
      setLastSelectedIndex(index);
    }
  };

  const toggleCategory = (categoryId: number) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      addCategory(newCategoryName.trim(), newCategoryColor);
      setNewCategoryName('');
      setNewCategoryColor(COLOR_PALETTE[0]);
      setIsAddingCategory(false);
      setShowColorPicker(null);
    }
  };

  const handleStartEdit = (cat: { id: number; name: string }) => {
    setEditingCategoryId(cat.id);
    setEditingName(cat.name);
  };

  const handleSaveEdit = () => {
    if (editingCategoryId && editingName.trim()) {
      updateCategory(editingCategoryId, { name: editingName.trim() });
      setEditingCategoryId(null);
      setEditingName('');
    }
  };

  const handleDeleteCategory = (id: number) => {
    if (confirm('Are you sure you want to delete this category? Related annotations will not be deleted.')) {
      deleteCategory(id);
    }
  };

  const handleColorChange = (catId: number, color: string) => {
    updateCategory(catId, { color });
    setShowColorPicker(null);
  };

  const annotationsByCategory = currentAnnotations.reduce((acc, ann) => {
    const catId = ann.categoryId;
    if (!acc[catId]) {
      acc[catId] = [];
    }
    acc[catId].push(ann);
    return acc;
  }, {} as Record<number, typeof currentAnnotations>);

  const allVisible = currentAnnotations.length > 0 && currentAnnotations.every(ann => ann.visible);

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        bgcolor: 'background.paper'
      }}
    >
      <Box sx={{ p: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FolderOpen size={14} />
            <Typography variant="subtitle2">Categories</Typography>
            <Chip label={categories.length} size="small" variant="outlined" />
          </Box>
          <Tooltip title="Add Category">
            <span>
              <IconButton size="small" onClick={() => setIsAddingCategory(true)} aria-label="Add Category">
                <Plus size={14} />
              </IconButton>
            </span>
          </Tooltip>
        </Box>

        <Collapse in={isAddingCategory}>
          <Box sx={{ mb: 1.5 }}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <IconButton
                size="small"
                onClick={() => setShowColorPicker(showColorPicker === 'new' ? null : 'new')}
                title="Select color"
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: 0.6,
                    bgcolor: newCategoryColor,
                    border: '1px solid',
                    borderColor: 'divider'
                  }}
                />
              </IconButton>
              <TextField
                size="small"
                fullWidth
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Category name..."
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAddCategory();
                  if (e.key === 'Escape') {
                    setIsAddingCategory(false);
                    setNewCategoryName('');
                    setShowColorPicker(null);
                  }
                }}
              />
              <IconButton
                size="small"
                onClick={handleAddCategory}
                disabled={!newCategoryName.trim()}
                color="primary"
              >
                <Check size={14} />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => {
                  setIsAddingCategory(false);
                  setNewCategoryName('');
                  setShowColorPicker(null);
                }}
              >
                <X size={14} />
              </IconButton>
            </Box>

            <Collapse in={showColorPicker === 'new'}>
              <Paper variant="outlined" sx={{ mt: 1, p: 1 }}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
                    gap: 0.5
                  }}
                >
                  {COLOR_PALETTE.map((color) => (
                    <IconButton
                      key={color}
                      size="small"
                      onClick={() => {
                        setNewCategoryColor(color);
                        setShowColorPicker(null);
                      }}
                      sx={{
                        width: 20,
                        height: 20,
                        p: 0,
                        borderRadius: 0.8,
                        border: newCategoryColor === color ? '2px solid' : '1px solid',
                        borderColor: newCategoryColor === color ? 'primary.main' : 'divider',
                        bgcolor: color,
                        '&:hover': { bgcolor: color }
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Collapse>
          </Box>
        </Collapse>

        {categories.length === 0 ? (
          <Paper variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
            <Box sx={{ mb: 0.5, display: 'flex', justifyContent: 'center' }}>
              <FolderOpen size={22} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              No categories
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Click + to add a category
            </Typography>
          </Paper>
        ) : (
          <List dense disablePadding sx={{ maxHeight: 176, overflowY: 'auto', pr: 0.5 }}>
            {categories.map((cat, idx) => (
              <Box key={cat.id} sx={{ position: 'relative', mb: 0.5 }}>
                <Paper
                  variant={currentCategoryId === cat.id ? 'outlined' : 'elevation'}
                  elevation={currentCategoryId === cat.id ? 0 : 1}
                  sx={{
                    borderColor: currentCategoryId === cat.id ? 'primary.main' : 'transparent'
                  }}
                >
                  <Box
                    onClick={() => setCurrentCategoryId(cat.id)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 1,
                      py: 0.75,
                      cursor: 'pointer'
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowColorPicker(showColorPicker === cat.id ? null : cat.id);
                      }}
                      title="Click to change color"
                      sx={{ p: 0.5 }}
                    >
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: cat.color,
                          border: '1px solid',
                          borderColor: 'divider'
                        }}
                      />
                    </IconButton>

                    {editingCategoryId === cat.id ? (
                      <TextField
                        size="small"
                        fullWidth
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveEdit();
                          if (e.key === 'Escape') {
                            setEditingCategoryId(null);
                            setEditingName('');
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <Typography variant="body2" noWrap sx={{ flex: 1 }}>
                        {idx < 9 && (
                          <Typography
                            component="span"
                            variant="caption"
                            color="text.disabled"
                            sx={{ mr: 0.5 }}
                          >
                            {idx + 1}
                          </Typography>
                        )}
                        {cat.name}
                      </Typography>
                    )}

                    {editingCategoryId === cat.id ? (
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSaveEdit();
                        }}
                        color="primary"
                      >
                        <Check size={13} />
                      </IconButton>
                    ) : (
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStartEdit(cat);
                        }}
                      >
                        <Edit2 size={13} />
                      </IconButton>
                    )}
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteCategory(cat.id);
                      }}
                      color="error"
                    >
                      <Trash2 size={13} />
                    </IconButton>
                  </Box>
                </Paper>

                <Collapse in={showColorPicker === cat.id}>
                  <Paper
                    variant="outlined"
                    sx={{ position: 'absolute', left: 0, right: 0, top: '100%', mt: 0.5, p: 1, zIndex: 10 }}
                  >
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
                        gap: 0.5
                      }}
                    >
                      {COLOR_PALETTE.map((color) => (
                        <IconButton
                          key={color}
                          size="small"
                          onClick={() => handleColorChange(cat.id, color)}
                          sx={{
                            width: 20,
                            height: 20,
                            p: 0,
                            borderRadius: 0.8,
                            border: cat.color === color ? '2px solid' : '1px solid',
                            borderColor: cat.color === color ? 'primary.main' : 'divider',
                            bgcolor: color,
                            '&:hover': { bgcolor: color }
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </Collapse>
              </Box>
            ))}
          </List>
        )}
      </Box>

      <Divider />

      <Box sx={{ flex: 1, overflowY: 'auto', p: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Layers size={14} />
            <Typography variant="subtitle2">Annotations</Typography>
            <Chip label={currentAnnotations.length} size="small" variant="outlined" />
          </Box>
          <Button
            size="small"
            variant="text"
            disabled={currentAnnotations.length === 0}
            onClick={() => setAllAnnotationsVisibility(!allVisible)}
          >
            {allVisible ? 'Hide All' : 'Show All'}
          </Button>
        </Box>

        <List disablePadding>
          {categories.map((category) => {
            const categoryAnnotations = annotationsByCategory[category.id] || [];
            if (categoryAnnotations.length === 0) return null;

            const isExpanded = expandedCategories.has(category.id);

            return (
              <Box key={category.id} sx={{ mb: 0.5 }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => toggleCategory(category.id)} sx={{ borderRadius: 1 }}>
                    {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    <Box
                      sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: category.color, ml: 0.5, mr: 1 }}
                    />
                    <Typography variant="body2" sx={{ flex: 1, fontWeight: 600 }}>
                      {category.name}
                    </Typography>
                    <Chip size="small" label={categoryAnnotations.length} variant="outlined" />
                  </ListItemButton>
                </ListItem>

                <Collapse in={isExpanded}>
                  <Box sx={{ ml: 2.5, mt: 0.5 }}>
                    {categoryAnnotations.map((ann) => {
                      const globalIdx = currentAnnotations.findIndex(a => a.id === ann.id);

                      return (
                        <Box key={ann.id} sx={{ position: 'relative', mb: 0.5 }}>
                          <Paper
                            variant={selectedAnnotationIds.includes(ann.id) ? 'outlined' : 'elevation'}
                            elevation={selectedAnnotationIds.includes(ann.id) ? 0 : 1}
                            sx={{
                              borderColor: selectedAnnotationIds.includes(ann.id) ? 'primary.main' : 'transparent'
                            }}
                          >
                            <Box
                              onClick={(e) => {
                                if (changingCategoryAnnotationId !== ann.id) {
                                  handleAnnotationClick(ann.id, globalIdx, e);
                                }
                              }}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.75,
                                px: 1,
                                py: 0.75,
                                cursor: 'pointer'
                              }}
                            >
                              <Box
                                sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: ann.color, flexShrink: 0 }}
                              />
                              <Typography variant="caption" noWrap sx={{ flex: 1 }}>
                                {ann.categoryName} #{ann.id.slice(-4)}
                              </Typography>
                              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                                {(ann.score * 100).toFixed(0)}%
                              </Typography>

                              <Tooltip title="Change category">
                                <IconButton
                                  size="small"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setChangingCategoryAnnotationId(
                                      changingCategoryAnnotationId === ann.id ? null : ann.id
                                    );
                                  }}
                                >
                                  <Tag size={12} />
                                </IconButton>
                              </Tooltip>

                              <Tooltip title={ann.visible ? 'Hide' : 'Show'}>
                                <IconButton
                                  size="small"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleAnnotationVisibility(ann.id);
                                  }}
                                >
                                  {ann.visible ? <Eye size={12} /> : <EyeOff size={12} />}
                                </IconButton>
                              </Tooltip>

                              <Tooltip title="Delete">
                                <IconButton
                                  size="small"
                                  color="error"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteAnnotation(ann.id);
                                  }}
                                >
                                  <Trash2 size={12} />
                                </IconButton>
                              </Tooltip>
                            </Box>
                          </Paper>

                          <Collapse in={changingCategoryAnnotationId === ann.id}>
                            <Paper
                              variant="outlined"
                              sx={{ position: 'absolute', left: 0, right: 0, top: '100%', mt: 0.5, zIndex: 10 }}
                            >
                              <Typography
                                variant="caption"
                                sx={{ display: 'block', px: 1.5, py: 1, color: 'text.secondary' }}
                              >
                                Move to category
                              </Typography>
                              <Divider />
                              <List dense disablePadding sx={{ maxHeight: 144, overflowY: 'auto' }}>
                                {categories.map(cat => (
                                  <ListItem key={cat.id} disablePadding>
                                    <ListItemButton
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleChangeAnnotationCategory(ann.id, cat.id);
                                      }}
                                      selected={cat.id === ann.categoryId}
                                    >
                                      <Box
                                        sx={{
                                          width: 10,
                                          height: 10,
                                          borderRadius: '50%',
                                          bgcolor: cat.color,
                                          mr: 1
                                        }}
                                      />
                                      <Typography variant="caption" sx={{ flex: 1 }}>
                                        {cat.name}
                                      </Typography>
                                      {cat.id === ann.categoryId && <Check size={13} />}
                                    </ListItemButton>
                                  </ListItem>
                                ))}
                              </List>
                            </Paper>
                          </Collapse>
                        </Box>
                      );
                    })}
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </List>

        {currentAnnotations.length === 0 && (
          <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', mt: 1 }}>
            <Box sx={{ mb: 0.5, display: 'flex', justifyContent: 'center' }}>
              <Layers size={22} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              No annotations
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Use tools to start annotating
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
}
