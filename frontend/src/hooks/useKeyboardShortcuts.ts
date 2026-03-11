import { useEffect, useCallback } from 'react';
import { useAnnotationStore } from '../store/annotationStore';
import type { ShortcutKey } from '../types';

/**
 * Keyboard shortcut configuration
 */
export const SHORTCUTS: ShortcutKey[] = [
  // Tool switching
  { key: 'h', description: 'Pan Tool', action: 'tool-hand' },
  { key: 'v', description: 'Select Tool', action: 'tool-pointer' },
  { key: '=', description: 'Add Point Tool', action: 'tool-add-point' },
  { key: '+', description: 'Add Point Tool', action: 'tool-add-point' },
  { key: '-', description: 'Remove Point Tool', action: 'tool-remove-point' },
  { key: 'b', description: 'Box Tool', action: 'tool-box' },
  { key: 'r', description: 'Brush Tool', action: 'tool-brush' },
  { key: 'l', description: 'Line Tool', action: 'tool-line' },
  { key: 't', description: 'Text Prompt', action: 'tool-text' },
  { key: 'm', description: 'Template Match', action: 'tool-template' },
  { key: 'p', description: 'Polygon Tool', action: 'tool-polygon' },
  
  // Edit operations
  { key: 'z', ctrlKey: true, description: 'Undo', action: 'undo' },
  { key: 'y', ctrlKey: true, description: 'Redo', action: 'redo' },
  { key: 'z', ctrlKey: true, shiftKey: true, description: 'Redo', action: 'redo' },
  { key: 'Delete', description: 'Delete Selected', action: 'delete' },
  { key: 'Backspace', description: 'Delete Selected', action: 'delete' },
  
  // Selection operations
  { key: 'a', ctrlKey: true, description: 'Select All', action: 'select-all' },
  { key: 'd', ctrlKey: true, description: 'Deselect All', action: 'deselect-all' },
  { key: 'Escape', description: 'Cancel/Clear', action: 'cancel' },
  
  // Confirm operation
  { key: 'Enter', description: 'Confirm Annotation', action: 'confirm' },
  { key: ' ', description: 'Confirm Annotation', action: 'confirm' },
  
  // Category quick select (1-9)
  { key: '1', description: 'Select Category 1', action: 'category-1' },
  { key: '2', description: 'Select Category 2', action: 'category-2' },
  { key: '3', description: 'Select Category 3', action: 'category-3' },
  { key: '4', description: 'Select Category 4', action: 'category-4' },
  { key: '5', description: 'Select Category 5', action: 'category-5' },
  { key: '6', description: 'Select Category 6', action: 'category-6' },
  { key: '7', description: 'Select Category 7', action: 'category-7' },
  { key: '8', description: 'Select Category 8', action: 'category-8' },
  { key: '9', description: 'Select Category 9', action: 'category-9' },
  
  // Other
  { key: 'c', ctrlKey: true, description: 'Copy Selected Annotations', action: 'copy' },
  { key: 'v', ctrlKey: true, description: 'Paste Annotations', action: 'paste' },
  { key: '?', description: 'Show Shortcuts', action: 'show-shortcuts' },
  { key: '/', ctrlKey: true, description: 'Show Shortcuts', action: 'show-shortcuts' },
];

const TOOL_ACTION_TO_TOOL: Record<string, ReturnType<typeof useAnnotationStore.getState>['currentTool']> = {
  'tool-hand': 'hand',
  'tool-pointer': 'pointer',
  'tool-add-point': 'add-point',
  'tool-remove-point': 'remove-point',
  'tool-box': 'box',
  'tool-brush': 'brush',
  'tool-line': 'line',
  'tool-text': 'text',
  'tool-template': 'template',
  'tool-polygon': 'polygon',
};

const getShortcutDefinitions = (overrides: Record<string, string> = {}): ShortcutKey[] => {
  return SHORTCUTS.map((shortcut) => {
    const override = overrides[shortcut.action];
    if (!override || shortcut.ctrlKey || shortcut.shiftKey || shortcut.altKey) {
      return shortcut;
    }
    return {
      ...shortcut,
      key: override,
    };
  });
};

export const getToolShortcutKeyMap = (overrides: Record<string, string> = {}): Record<string, string> => {
  const shortcuts = getShortcutDefinitions(overrides);
  const keyToAction: Record<string, string> = {};

  shortcuts.forEach((shortcut) => {
    if (shortcut.action.startsWith('tool-') && !shortcut.ctrlKey && !shortcut.shiftKey && !shortcut.altKey) {
      keyToAction[shortcut.key.toLowerCase()] = shortcut.action;
    }
  });

  return keyToAction;
};

interface UseKeyboardShortcutsProps {
  onConfirm?: () => void;
}

export function useKeyboardShortcuts({ onConfirm }: UseKeyboardShortcutsProps = {}) {
  const {
    setCurrentTool,
    undo,
    redo,
    deleteSelectedAnnotations,
    selectAll,
    deselectAll,
    clearTempPoints,
    setTempBox,
    setCurrentCategoryId,
    categories,
    toggleShortcuts,
    currentTool,
    copySelectedAnnotations,
    startPasting,
    cancelPaste,
    isPasting,
    shortcutOverrides
  } = useAnnotationStore();

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Ignore shortcuts when in input fields
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement
    ) {
      // But allow Escape key
      if (event.key !== 'Escape') {
        return;
      }
    }

    const { key, ctrlKey, shiftKey, altKey } = event;

    // Tool switching
    if (!ctrlKey && !shiftKey && !altKey) {
      const keyToAction = getToolShortcutKeyMap(shortcutOverrides);
      const toolAction = keyToAction[key.toLowerCase()];
      if (toolAction) {
        const tool = TOOL_ACTION_TO_TOOL[toolAction];
        if (tool) {
          setCurrentTool(tool);
          event.preventDefault();
          return;
        }
      }
    }

    // Edit operations
    if (ctrlKey && !shiftKey && !altKey) {
      switch (key.toLowerCase()) {
        case 'z':
          undo();
          event.preventDefault();
          return;
        case 'y':
          redo();
          event.preventDefault();
          return;
        case 'a':
          selectAll();
          event.preventDefault();
          return;
        case 'd':
          deselectAll();
          event.preventDefault();
          return;
        case 'c':
          copySelectedAnnotations();
          event.preventDefault();
          return;
        case 'v':
          startPasting();
          event.preventDefault();
          return;
        case '/':
          toggleShortcuts();
          event.preventDefault();
          return;
      }
    }

    // Ctrl+Shift+Z = Redo
    if (ctrlKey && shiftKey && key.toLowerCase() === 'z') {
      redo();
      event.preventDefault();
      return;
    }

    // Delete operation
    if (key === 'Delete' || key === 'Backspace') {
      deleteSelectedAnnotations();
      event.preventDefault();
      return;
    }

    // Cancel operation
    if (key === 'Escape') {
      // If in paste mode, cancel paste first
      if (isPasting) {
        cancelPaste();
        event.preventDefault();
        return;
      }
      clearTempPoints();
      setTempBox(null);
      deselectAll();
      event.preventDefault();
      return;
    }

    // Confirm operation - Enter key handled by AnnotationCanvas (avoid duplicate trigger)
    // Only handle spacebar here
    if (key === ' ') {
      if (currentTool !== 'pointer') {
        onConfirm?.();
        event.preventDefault();
        return;
      }
    }

    // Category quick select (1-9)
    if (!ctrlKey && !shiftKey && !altKey) {
      const num = parseInt(key, 10);
      if (num >= 1 && num <= 9) {
        const category = categories[num - 1];
        if (category) {
          setCurrentCategoryId(category.id);
          event.preventDefault();
          return;
        }
      }
    }

    // Show keyboard shortcuts
    if (key === '?') {
      toggleShortcuts();
      event.preventDefault();
      return;
    }
  }, [
    setCurrentTool,
    undo,
    redo,
    deleteSelectedAnnotations,
    selectAll,
    deselectAll,
    clearTempPoints,
    setTempBox,
    setCurrentCategoryId,
    categories,
    toggleShortcuts,
    currentTool,
    copySelectedAnnotations,
    startPasting,
    cancelPaste,
    isPasting,
    shortcutOverrides,
    onConfirm
  ]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}

/**
 * Format keyboard shortcut display
 */
export function formatShortcut(shortcut: ShortcutKey): string {
  const parts: string[] = [];
  if (shortcut.ctrlKey) parts.push('Ctrl');
  if (shortcut.shiftKey) parts.push('Shift');
  if (shortcut.altKey) parts.push('Alt');
  
  let key = shortcut.key;
  if (key === ' ') key = 'Space';
  if (key === 'Escape') key = 'Esc';
  if (key === 'Delete') key = 'Del';
  if (key === 'Backspace') key = '⌫';
  
  parts.push(key.toUpperCase());
  return parts.join(' + ');
}

export function getDisplayShortcuts(overrides: Record<string, string> = {}): ShortcutKey[] {
  return getShortcutDefinitions(overrides);
}
