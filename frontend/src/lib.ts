/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
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
