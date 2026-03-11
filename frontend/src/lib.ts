/**
 * SAM3 Annotation Tool - Library Entry Point
 *
 * Usage:
 *   import { SAM3AnnotationTool } from 'sam3-annotation-tool';
 *   import 'sam3-annotation-tool/style.css';
 *
 *   function MyPage() {
 *     return <SAM3AnnotationTool apiBaseUrl="/api" />;
 *   }
 */

// Import styles so they're bundled into the CSS output
import './index.css';

// Main component
export { SAM3AnnotationTool } from './SAM3AnnotationTool';
export type { SAM3AnnotationToolProps } from './SAM3AnnotationTool';

// Re-export useful types for consumers
export type {
  Annotation,
  AnnotationTool,
  BoundingBox,
  Category,
  COCOExport,
  ImageInfo,
  Point,
  RLEMask,
  SegmentationResult,
} from './types';

// Re-export the store hook for advanced usage
export { useAnnotationStore } from './store/annotationStore';
