import axios from 'axios';
import JSZip from 'jszip';
import type { 
  ImageInfo, 
  SegmentationResult, 
  Point, 
  BoundingBox,
  Annotation,
  Category,
  COCOExport,
  ProjectData
} from '../types';

let API_BASE = '/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 60000, // 60 seconds for segmentation
});

/**
 * Configure the API base URL (used when embedding as a library).
 * Must be called before any API requests are made.
 */
export function setApiBaseUrl(baseUrl: string) {
  API_BASE = baseUrl;
  api.defaults.baseURL = baseUrl;
}

type UploadResponse = {
  id?: string;
  image_id?: string;
  file_name?: string;
  width?: number;
  height?: number;
  image_url?: string;  // Data URL converted by backend
};

// /**
//  * Convert polygon to RLE mask
//  */
// function polygonToRLE(points: number[], width: number, height: number): { counts: number[]; size: [number, number] } {
//   // Create empty mask (row-major order: height * width)
//   const mask = new Uint8Array(height * width);
  
//   // Convert points [x1,y1,x2,y2,...] to coordinate array
//   const vertices: Array<{ x: number; y: number }> = [];
//   for (let i = 0; i < points.length; i += 2) {
//     vertices.push({ x: points[i], y: points[i + 1] });
//   }
  
//   if (vertices.length < 3) {
//     return { counts: [height * width], size: [height, width] };
//   }
  
//   // Fill polygon using scanline algorithm
//   const minY = Math.max(0, Math.floor(Math.min(...vertices.map(v => v.y))));
//   const maxY = Math.min(height - 1, Math.ceil(Math.max(...vertices.map(v => v.y))));
  
//   for (let y = minY; y <= maxY; y++) {
//     const intersections: number[] = [];
    
//     for (let i = 0; i < vertices.length; i++) {
//       const v1 = vertices[i];
//       const v2 = vertices[(i + 1) % vertices.length];
      
//       // Check whether this edge intersects the scanline
//       if ((v1.y <= y && v2.y > y) || (v2.y <= y && v1.y > y)) {
//         // Compute x coordinate of the intersection
//         const x = v1.x + (y - v1.y) / (v2.y - v1.y) * (v2.x - v1.x);
//         intersections.push(x);
//       }
//     }
    
//     // Sort intersections
//     intersections.sort((a, b) => a - b);
    
//     // Fill pixels between paired intersections
//     for (let i = 0; i < intersections.length; i += 2) {
//       if (i + 1 < intersections.length) {
//         const x1 = Math.max(0, Math.floor(intersections[i]));
//         const x2 = Math.min(width - 1, Math.ceil(intersections[i + 1]));
//         for (let x = x1; x <= x2; x++) {
//           mask[y * width + x] = 1;  // row-major: y * width + x
//         }
//       }
//     }
//   }
  
//   // Convert to RLE (row-major order, matches SAM3 internal format)
//   // Traverse mask in order: row 0 left-to-right, row 1 left-to-right, ...
//   const counts: number[] = [];
//   let currentValue = 0;  // RLE starts from 0 (background)
//   let currentCount = 0;
  
//   for (let i = 0; i < mask.length; i++) {
//     const value = mask[i];
//     if (value === currentValue) {
//       currentCount++;
//     } else {
//       counts.push(currentCount);
//       currentValue = value;
//       currentCount = 1;
//     }
//   }
//   counts.push(currentCount);
  
//   return { counts, size: [height, width] };
// }

// /**
//  * Calculate bbox from polygon points
//  */
// function calculateBboxFromPolygon(points: number[]): [number, number, number, number] {
//   let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  
//   for (let i = 0; i < points.length; i += 2) {
//     const x = points[i];
//     const y = points[i + 1];
//     minX = Math.min(minX, x);
//     minY = Math.min(minY, y);
//     maxX = Math.max(maxX, x);
//     maxY = Math.max(maxY, y);
//   }
  
//   return [minX, minY, maxX - minX, maxY - minY];
// }

// /**
//  * Calculate polygon area (using Shoelace formula)
//  */
// function calculatePolygonArea(points: number[]): number {
//   let area = 0;
//   const n = points.length / 2;
  
//   for (let i = 0; i < n; i++) {
//     const x1 = points[i * 2];
//     const y1 = points[i * 2 + 1];
//     const x2 = points[((i + 1) % n) * 2];
//     const y2 = points[((i + 1) % n) * 2 + 1];
//     area += x1 * y2 - x2 * y1;
//   }
  
//   return Math.abs(area) / 2;
// }


// ==================== Existing API ====================

/**
 * Upload image
 */
export async function uploadImage(file: File): Promise<ImageInfo> {
  console.log('[uploadImage] Start processing file:', file.name, file.type, file.size);

  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post<UploadResponse>('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout: 120000, // 2 minutes, large files need more time
    });

    const data = response.data;
    console.log('[uploadImage] Backend response:', data);

    // Prefer backend-converted image_url (can handle formats not supported by browser like BMP)
    const imageUrl = data.image_url || '';
    
    const result: ImageInfo = {
      id: data.id || data.image_id || `img_${Date.now()}`,
      fileName: data.file_name || file.name,
      width: data.width ?? 800,
      height: data.height ?? 600,
      url: imageUrl,
      file,
      isLocalOnly: false
    };
    console.log('[uploadImage] Return ImageInfo:', result.id, 'image URL length:', imageUrl.length);
    return result;
  } catch (error) {
    console.warn('[uploadImage] Backend upload failed, trying local conversion:', error);

    // When backend fails, try local conversion
    try {
      const { url: imageUrl, width, height } = await convertImageToDataUrl(file);
      const result: ImageInfo = {
        id: `local_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        fileName: file.name,
        width,
        height,
        url: imageUrl,
        file,
        isLocalOnly: true
      };
      console.log('[uploadImage] Return local ImageInfo:', result.id);
      return result;
    } catch (localError) {
      console.error('[uploadImage] Local conversion also failed:', localError);
      throw new Error(`Cannot load image ${file.name}: format not supported or file corrupted`);
    }
  }
}

/**
 * Convert image file to Data URL (via canvas to ensure compatibility)
 * This can handle formats with limited browser support like BMP
 */
async function convertImageToDataUrl(file: File): Promise<{ url: string; width: number; height: number }> {
  console.log('[convertImageToDataUrl] Start conversion:', file.name, file.type);
  
  try {
    // Method 1: Use createImageBitmap (most reliable, supports BMP)
    const imageBitmap = await createImageBitmap(file);
    console.log('[convertImageToDataUrl] createImageBitmap success:', imageBitmap.width, 'x', imageBitmap.height);
    
    const canvas = document.createElement('canvas');
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Cannot create canvas context');
    }
    
    ctx.drawImage(imageBitmap, 0, 0);
    imageBitmap.close(); // Release resources
    
    // Convert to JPEG data URL (reduce size)
    const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
    console.log('[convertImageToDataUrl] Conversion complete, data URL length:', dataUrl.length);
    
    return {
      url: dataUrl,
      width: canvas.width,
      height: canvas.height
    };
  } catch (bitmapError) {
    console.warn('[convertImageToDataUrl] createImageBitmap failed, trying Image element:', bitmapError);
    
    // Method 2: Fallback to Image element
    return new Promise((resolve, reject) => {
      const objectUrl = URL.createObjectURL(file);
      const img = new Image();
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          URL.revokeObjectURL(objectUrl);
          reject(new Error('Cannot create canvas context'));
          return;
        }
        
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
        URL.revokeObjectURL(objectUrl);
        
        resolve({
          url: dataUrl,
          width: img.naturalWidth,
          height: img.naturalHeight
        });
      };
      
      img.onerror = (e) => {
        URL.revokeObjectURL(objectUrl);
        console.error('[convertImageToDataUrl] Image loading also failed:', e);
        reject(new Error(`Cannot load image: ${file.name}`));
      };
      
      img.src = objectUrl;
    });
  }
}

/**
 * Text prompt segmentation
 */
export async function segmentWithText(
  imageId: string,
  prompt: string,
  confidenceThreshold: number = 0.5
): Promise<SegmentationResult[]> {
  const response = await api.post<{
    image_id: string;
    results: SegmentationResult[];
  }>('/segment/text', {
    image_id: imageId,
    prompt,
    confidence_threshold: confidenceThreshold
  });
  
  return response.data.results;
}

/**
 * Point prompt segmentation
 * @param resetMask - Whether to reset mask state (set to true when starting new annotation)
 */
export async function segmentWithPoints(
  imageId: string,
  points: Point[],
  confidenceThreshold: number = 0.5,
  resetMask: boolean = false
): Promise<SegmentationResult[]> {
  const response = await api.post<{
    image_id: string;
    results: SegmentationResult[];
  }>('/segment/points', {
    image_id: imageId,
    points: points.map(p => ({ x: p.x, y: p.y, label: p.label })),
    confidence_threshold: confidenceThreshold,
    reset_mask: resetMask
  });
  
  return response.data.results;
}

/**
 * Reset mask state (call before starting new annotation)
 */
export async function resetMaskState(imageId: string): Promise<boolean> {
  const response = await api.post<{
    success: boolean;
    reset: boolean;
    image_id: string;
  }>(`/segment/reset-mask/${imageId}`);
  
  return response.data.success;
}

/**
 * Box selection segmentation
 */
export async function segmentWithBox(
  imageId: string,
  box: BoundingBox,
  label: boolean = true,
  confidenceThreshold: number = 0.5
): Promise<SegmentationResult[]> {
  const response = await api.post<{
    image_id: string;
    results: SegmentationResult[];
  }>('/segment/box', {
    image_id: imageId,
    box: { x1: box.x1, y1: box.y1, x2: box.x2, y2: box.y2 },
    label,
    confidence_threshold: confidenceThreshold
  });
  
  return response.data.results;
}

/**
 * Template matching segmentation
 */
export async function segmentWithTemplate(
  imageId: string,
  templateImageId: string,
  templateBox: BoundingBox,
  confidenceThreshold: number = 0.5
): Promise<SegmentationResult[]> {
  const response = await api.post<{
    image_id: string;
    results: SegmentationResult[];
  }>('/segment/template', {
    image_id: imageId,
    template_image_id: templateImageId,
    template_box: {
      x1: templateBox.x1,
      y1: templateBox.y1,
      x2: templateBox.x2,
      y2: templateBox.y2
    },
    confidence_threshold: confidenceThreshold
  });
  
  return response.data.results;
}

/**
 * Export COCO JSON
 */
export async function exportCOCO(
  images: ImageInfo[],
  annotations: Annotation[],
  categories: Category[]
): Promise<COCOExport> {
  const response = await api.post<COCOExport>('/export/coco', {
    images: images.map(img => ({
      id: img.id,
      file_name: img.fileName,
      width: img.width,
      height: img.height
    })),
    annotations: annotations.map((ann, idx) => ({
      id: idx + 1,
      image_id: ann.imageId,
      category_id: ann.categoryId,
      category_name: ann.categoryName,
      segmentation: ann.segmentation,
      bbox: ann.bbox,
      area: ann.area,
      score: ann.score
    })),
    categories: categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      supercategory: cat.supercategory || ''
    }))
  });
  
  return response.data;
}

/**
 * Reset image prompts
 */
export async function resetPrompts(imageId: string): Promise<void> {
  await api.post(`/reset/${imageId}`);
}

/**
 * Convert Data URL to Blob
 */
function dataURLtoBlob(dataURL: string): Blob {
  const parts = dataURL.split(',');
  const mime = parts[0].match(/:(.*?);/)?.[1] || 'image/png';
  const bstr = atob(parts[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

/**
 * Get file extension
 */
function getExtensionFromMime(mime: string): string {
  const mimeToExt: Record<string, string> = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/webp': '.webp',
    'image/bmp': '.bmp',
    'image/gif': '.gif'
  };
  return mimeToExt[mime] || '.png';
}

/**
 * Export COCO JSON and images as ZIP file
 */
export async function downloadCOCOWithImages(
  cocoData: COCOExport,
  images: ImageInfo[],
  filename: string = 'annotations_coco.zip'
): Promise<void> {
  const zip = new JSZip();
  
  // Add COCO JSON
  zip.file('instances_default.json', JSON.stringify(cocoData, null, 2));
  
  // Add all images (same level as JSON)
  for (const img of images) {
    if (img.url) {
      try {
        if (img.url.startsWith('data:')) {
          // Data URL format
          const blob = dataURLtoBlob(img.url);
          const ext = getExtensionFromMime(blob.type);
          // Ensure filename has correct extension
          const fileName = img.fileName.includes('.') ? img.fileName : `${img.fileName}${ext}`;
          zip.file(fileName, blob);
        } else if (img.url.startsWith('blob:')) {
          // Blob URL format - need to fetch
          const response = await fetch(img.url);
          const blob = await response.blob();
          const ext = getExtensionFromMime(blob.type);
          const fileName = img.fileName.includes('.') ? img.fileName : `${img.fileName}${ext}`;
          zip.file(fileName, blob);
        }
      } catch (err) {
        console.warn(`[downloadCOCOWithImages] Cannot add image ${img.fileName}:`, err);
      }
    }
  }
  
  // Generate ZIP and download
  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Download COCO JSON file (JSON only, no images)
 */
export function downloadCOCOJSON(cocoData: COCOExport, filename: string = 'instances_default.json'): void {
  const blob = new Blob([JSON.stringify(cocoData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ==================== YOLO export ====================

/**
 * Decode RLE to binary mask array
 */
function rleToMask(rle: { counts: number[]; size: [number, number] }): boolean[][] {
  const [height, width] = rle.size;
  const mask: boolean[][] = Array.from({ length: height }, () => Array(width).fill(false));
  
  let idx = 0;
  let value = false;
  
  for (const count of rle.counts) {
    for (let i = 0; i < count; i++) {
      const row = idx % height;
      const col = Math.floor(idx / height);
      if (row < height && col < width) {
        mask[row][col] = value;
      }
      idx++;
    }
    value = !value;
  }
  
  return mask;
}

/**
 * Extract contour points from binary mask (simplified marching squares)
 */
function maskToPolygon(mask: boolean[][], width: number, height: number): number[][] {
  const contours: number[][] = [];
  
  // Find all boundary points
  const edgePoints: Array<{ x: number; y: number }> = [];
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (mask[y][x]) {
        // Check if it's a boundary point (at least one neighbor is background)
        const isEdge = 
          x === 0 || x === width - 1 || y === 0 || y === height - 1 ||
          !mask[y - 1]?.[x] || !mask[y + 1]?.[x] ||
          !mask[y]?.[x - 1] || !mask[y]?.[x + 1];
        
        if (isEdge) {
          edgePoints.push({ x, y });
        }
      }
    }
  }
  
  if (edgePoints.length === 0) return contours;
  
  // Simplify: sort and sample boundary points
  // Use angle sorting to form closed polygon
  const centerX = edgePoints.reduce((sum, p) => sum + p.x, 0) / edgePoints.length;
  const centerY = edgePoints.reduce((sum, p) => sum + p.y, 0) / edgePoints.length;
  
  edgePoints.sort((a, b) => {
    const angleA = Math.atan2(a.y - centerY, a.x - centerX);
    const angleB = Math.atan2(b.y - centerY, b.x - centerX);
    return angleA - angleB;
  });
  
  // Sample to reduce point count (keep max 100 points)
  const maxPoints = 100;
  const step = Math.max(1, Math.floor(edgePoints.length / maxPoints));
  const sampledPoints: number[] = [];
  
  for (let i = 0; i < edgePoints.length; i += step) {
    sampledPoints.push(edgePoints[i].x, edgePoints[i].y);
  }
  
  if (sampledPoints.length >= 6) {  // At least 3 points
    contours.push(sampledPoints);
  }
  
  return contours;
}

/**
 * Convert annotation to YOLO format
 * YOLO segmentation format: class_id x1 y1 x2 y2 ... xn yn (normalized 0-1)
 * YOLO detection format: class_id x_center y_center width height (normalized 0-1)
 */
function annotationToYOLO(
  annotation: Annotation,
  imageWidth: number,
  imageHeight: number,
  categoryIndexMap: Map<number, number>,
  useSegmentation: boolean = true
): string {
  const classId = categoryIndexMap.get(annotation.categoryId) ?? 0;
  
  if (useSegmentation && annotation.segmentation) {
    // Segmentation format: convert RLE to polygon
    try {
      const mask = rleToMask(annotation.segmentation);
      const polygons = maskToPolygon(mask, imageWidth, imageHeight);
      
      if (polygons.length > 0 && polygons[0].length >= 6) {
        // Normalize coordinates to 0-1
        const normalizedPoints = polygons[0].map((val, idx) => 
          idx % 2 === 0 
            ? (val / imageWidth).toFixed(6)   // x
            : (val / imageHeight).toFixed(6)  // y
        );
        return `${classId} ${normalizedPoints.join(' ')}`;
      }
    } catch (err) {
      console.warn('[annotationToYOLO] RLE conversion failed, using bbox instead:', err);
    }
  }
  
  // Use bbox (detection format)
  const [x, y, w, h] = annotation.bbox;
  const xCenter = ((x + w / 2) / imageWidth).toFixed(6);
  const yCenter = ((y + h / 2) / imageHeight).toFixed(6);
  const normW = (w / imageWidth).toFixed(6);
  const normH = (h / imageHeight).toFixed(6);
  
  return `${classId} ${xCenter} ${yCenter} ${normW} ${normH}`;
}

/**
 * Export YOLO format as ZIP file
 * 
 * Structure:
 * - obj.data (dataset configuration)
 * - obj.names (category names)
 * - train.txt (image path list)
 * - obj_train_data/ (label files and images)
 */
export async function downloadYOLOWithImages(
  images: ImageInfo[],
  annotations: Annotation[],
  categories: Category[],
  filename: string = 'annotations_yolo.zip',
  useSegmentation: boolean = true,
  includeImages: boolean = true
): Promise<void> {
  const zip = new JSZip();
  
  // Create obj_train_data folder
  const trainDataFolder = zip.folder('obj_train_data');
  
  // Create category index map (YOLO uses 0-based index)
  const categoryIndexMap = new Map<number, number>();
  categories.forEach((cat, index) => {
    categoryIndexMap.set(cat.id, index);
  });
  
  // Create obj.names (category names, one per line)
  const objNames = categories.map(cat => cat.name).join('\n');
  zip.file('obj.names', objNames);
  
  // Create obj.data
  const objData = `classes = ${categories.length}
train = data/train.txt
names = data/obj.names
backup = backup/
`;
  zip.file('obj.data', objData);
  
  // Collect all image paths for train.txt
  const trainPaths: string[] = [];
  
  // Create annotation file for each image
  for (const img of images) {
    // Get all annotations for this image
    const imgAnnotations = annotations.filter(ann => ann.imageId === img.id);
    
    // Convert to YOLO format
    const yoloLines = imgAnnotations.map(ann => 
      annotationToYOLO(ann, img.width, img.height, categoryIndexMap, useSegmentation)
    );
    
    // Create annotation file (remove extension, change to .txt)
    const baseName = img.fileName.replace(/\.[^/.]+$/, '');
    if (trainDataFolder) {
      trainDataFolder.file(`${baseName}.txt`, yoloLines.join('\n'));
    }
    
    // Add image path to train.txt
    trainPaths.push(`data/obj_train_data/${img.fileName}`);
    
    // Add image (only when includeImages is true)
    if (includeImages && img.url && trainDataFolder) {
      try {
        if (img.url.startsWith('data:')) {
          const blob = dataURLtoBlob(img.url);
          const ext = getExtensionFromMime(blob.type);
          const fileName = img.fileName.includes('.') ? img.fileName : `${img.fileName}${ext}`;
          trainDataFolder.file(fileName, blob);
        } else if (img.url.startsWith('blob:')) {
          const response = await fetch(img.url);
          const blob = await response.blob();
          const ext = getExtensionFromMime(blob.type);
          const fileName = img.fileName.includes('.') ? img.fileName : `${img.fileName}${ext}`;
          trainDataFolder.file(fileName, blob);
        }
      } catch (err) {
        console.warn(`[downloadYOLOWithImages] Cannot add image ${img.fileName}:`, err);
      }
    }
  }
  
  // Create train.txt (image path list)
  zip.file('train.txt', trainPaths.join('\n'));
  
  // Generate ZIP and download
  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Save project to file
 */
export function saveProject(
  images: ImageInfo[],
  annotations: Annotation[],
  categories: Category[],
  currentImageId: string | null,
  currentCategoryId: number
): void {
  const projectData: ProjectData = {
    version: '1.0',
    savedAt: new Date().toISOString(),
    images: images.map(img => ({
      id: img.id,
      fileName: img.fileName,
      width: img.width,
      height: img.height,
      url: img.url  // base64 data URL
    })),
    annotations: annotations.map(ann => ({
      ...ann,
      selected: false  // Clear selection state when saving
    })),
    categories,
    currentImageId,
    currentCategoryId
  };

  const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `project_${new Date().toISOString().slice(0, 10)}.sam3proj.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Load project file
 */
export async function loadProject(file: File): Promise<ProjectData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const projectData = JSON.parse(content) as ProjectData;
        
        // Validate project format
        if (!projectData.version || !projectData.images || !projectData.annotations) {
          throw new Error('Invalid project file format');
        }
        
        resolve(projectData);
      } catch (err) {
        reject(new Error('Unable to parse project file'));
      }
    };
    reader.onerror = () => reject(new Error('Unable to read file'));
    reader.readAsText(file);
  });
}
