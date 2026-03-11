# SAM 3 Professional Annotation Tool

## Overview

This is a high-performance, professionally enhanced version of the SAM 3 Annotation Tool, specifically optimized for improved user experience and library compatibility. It leverages Meta's Segment Anything Model 3 (SAM 3) to provide rapid, high-fidelity data labeling for Vision Language Action (VLA) models.

This project is a **Professional Refactor** of the [SAM3_Annotation_Tool](https://github.com/software-ai-life/SAM3_Annotation_Tool) originally developed by software-ai-life.

### Key Enhancements in this Version

- **Complete UI Overhaul**: Replaced the original UI library with a robust, professional-grade framework for better stability.

## Licensing & Compliance

### 1. This Repository (Apache License 2.0)

The modifications, UI code, and orchestration logic in this repository are licensed under the [Apache License 2.0](LICENSE).

- **Permissions**: Commercial use, modification, and distribution are permitted.
- **Condition**: You must include the original copyright notice and a copy of the license in any redistribution.

### 2. Original Work (MIT License)

This project incorporates elements from the original implementation by [software-ai-life](https://github.com/software-ai-life). We acknowledge their foundational contribution. In accordance with the MIT license, the original copyright notice is maintained in the [NOTICE](NOTICE) file.

### 3. Meta SAM 3 Model

The underlying Segment Anything Model 3 (SAM 3) logic and weights are subject to the [Meta SAM 3 Research License](https://github.com/facebookresearch/sam3).

- Users must adhere to Meta's terms, including restrictions on military and ITAR-regulated use.
- **Note**: This repository does not distribute SAM 3 weights. Please follow the setup instructions below to download them directly from Meta.

---

An image annotation tool based on Meta SAM3 (Segment Anything with Concepts), featuring an intuitive user interface and multiple annotation methods.

## Installation & Execution

### System Requirements

- Python 3.10+
- Node.js 18+
- CUDA-compatible GPU (recommended for SAM3)
- PyTorch 2.7+
- CUDA 12.6 compatible NVIDIA driver

---

### Step 0 — Download Model Files

Both options below require `sam3.pt` and `config.json` from Hugging Face. Download them once:

```bash
# Authenticate (one-time)
huggingface-cli login

# Download files
python - <<'PY'
from huggingface_hub import hf_hub_download
hf_hub_download(repo_id="facebook/sam3", filename="sam3.pt",     local_dir=".")
hf_hub_download(repo_id="facebook/sam3", filename="config.json", local_dir=".")
PY
```

- **For Docker** → copy both files into `sam3/` at the project root (next to `backend/`)
- **For local Python** → copy both files into `backend/app/sam3/`

---

### Option A — Docker (recommended)

#### Prerequisites
- Docker Desktop with GPU support enabled
- NVIDIA Container Toolkit installed

```bash
# From the backend/ directory
cd backend

# Build image and start container (first run downloads ~4 GB of dependencies)
docker compose up -d --build

# Stream logs
docker compose logs -f backend

# Stop
docker compose down
```

Backend API available at `http://localhost:8000`  
Interactive API docs at `http://localhost:8000/docs`

To load the SAM3 model eagerly at startup rather than on first request, set in `backend/docker-compose.yml`:

```yaml
environment:
  SAM3_EAGER_LOAD: "1"
```

---

### Option B — Local Python

```bash
cd backend

# Using uv (recommended)
uv venv --python 3.10
.venv\Scripts\activate        # Windows
# source .venv/bin/activate   # Linux / macOS
uv pip install torch==2.7.0 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126
uv pip install -r requirements.txt

# Or using standard pip
python -m venv .venv
.venv\Scripts\activate
pip install torch==2.7.0 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126
pip install -r requirements.txt

# Clone SAM3 source (required for local runs)
git clone https://github.com/facebookresearch/sam3.git ../sam3_repo
pip install -e ../sam3_repo

# Start backend
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

# To use a specific GPU
SAM3_GPU_INDEX=1 uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

Backend API available at `http://localhost:8000`

---

### Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start dev server (with hot-module reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Access the Application

Open your browser and navigate to `http://localhost:5766`

## Features

### 🎯 Annotation Methods

1. **Text Prompt**
   - Enter descriptive text like "red car" or "person in white shirt"
   - SAM3 automatically identifies and segments all matching objects

2. **Point Prompts**
   - **Positive (+)**: Left-click on the object area to segment
   - **Negative (-)**: Right-click on areas to exclude
   - Supports multi-point combinations for precise control
   - Real-time preview, press Enter to confirm

3. **Box Prompt**
   - Drag to draw a bounding box
   - Quick selection of target area

4. **Template Matching**
   - Select an object in a reference image as template
   - Automatically find similar objects in the target image

5. **Manual Polygon Tool**
   - Fallback option when SAM3 is unavailable
   - Manually click to draw polygon vertices
   - Dynamic preview, click start point or press Enter to close

### 🖌️ Fine-Tuning Features

- **Control Point Dragging**: Drag boundary control points to adjust contours after selecting an annotation
- **Double-Click to Add Control Points**: In edit mode, double-click on boundary lines to add extra control points
  - Green + indicator appears when hovering over boundary lines
  - Useful when boundary points are insufficient or more precise adjustments needed
- **Fixed Visual Size**: Control points maintain consistent visual size regardless of canvas zoom level

### 🖱️ Canvas Operations

- **Mouse Wheel Zoom**: Zoom in/out centered at mouse position
- **Middle-Click Drag**: Hold middle mouse button (scroll wheel) to pan canvas in any tool mode
- **Pointer Tool Drag**: Drag to pan canvas when using pointer tool (V)

### 📦 Export Format

- **COCO JSON + Images ZIP**: Full COCO annotation format support
  - Includes image info, mask annotations (RLE), bounding boxes, categories
  - Automatically packages annotations JSON and all images into ZIP
  - Ready for deep learning training

### 💾 Auto Save

- Automatically saves annotation data to browser LocalStorage
- Recover unsaved annotations after unexpected page closure
- No manual action required, auto-saves every 2 seconds

### 📋 Copy & Paste and Multi-Select

- **Copy & Paste**: 
  - `Ctrl + C` to copy selected annotations
  - `Ctrl + V` to enter paste mode, paste to other positions or images
- **Multi-Select Support**:
  - `Ctrl/Cmd + Click`: Multi-select individual annotations (add/remove)
  - `Shift + Click`: Range selection (Excel-like, select all between two points)
  
### 🏷️ Category Management

- **Quick Category Change**: Change annotation category via Tag button after completion
- **Visual Indication**: Dropdown menu highlights current category
- **Instant Update**: Annotation color updates immediately after category change

## Keyboard Shortcuts

### Tool Switching
| Shortcut | Function |
|----------|----------|
| `V` | Selection tool (pan/zoom) |
| `+` or `=` | Add point tool |
| `-` | Remove point tool |
| `B` | Box selection tool |
| `T` | Text prompt tool |
| `M` | Template matching tool |
| `P` | Manual polygon tool |

### Edit Operations
| Shortcut | Function |
|----------|----------|
| `Ctrl + Z` | Undo |
| `Ctrl + Y` or `Ctrl + Shift + Z` | Redo |
| `Delete` or `Backspace` | Delete selected annotations |
| `Ctrl + C` | Copy selected annotations |
| `Ctrl + V` | Paste annotations (enter paste mode) |

### Selection Operations
| Shortcut | Function |
|----------|----------|
| `Ctrl + A` | Select all annotations |
| `Ctrl + D` | Deselect all |
| `Ctrl/Cmd + Click` | Multi-select individual annotations (add/remove) |
| `Shift + Click` | Range selection (select all between two points) |
| `Escape` | Cancel current operation / clear temp points |
| `Enter` or `Space` | Confirm current annotation |

### Canvas Operations
| Operation | Function |
|-----------|----------|
| `Mouse Wheel` | Zoom canvas centered at mouse position |
| `Middle-Click Drag` | Pan canvas in any tool mode |
| `Double-Click Boundary` | Add control point in edit mode |

### Quick Category Selection
| Shortcut | Function |
|----------|----------|
| `1` - `9` | Quick select category 1-9 |

### Others
| Shortcut | Function |
|----------|----------|
| `?` or `Ctrl + /` | Show keyboard shortcuts |

## Project Structure

```
SAM3_Annotation_Tool/
├── backend/                    # FastAPI backend
│   ├── app/
│   │   ├── main.py            # FastAPI entry point
│   │   ├── models/            # Pydantic schemas
│   │   ├── routers/           # API route handlers
│   │   ├── services/          # SAM3 model wrapper
│   │   └── sam3/              # Model files for local Python runs
│   │       ├── sam3.pt
│   │       └── config.json
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── .dockerignore
│   └── requirements.txt
│
├── frontend/                   # React + TypeScript + Vite app
│   ├── src/
│   │   ├── components/        # UI components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── services/          # API client (axios)
│   │   ├── store/             # Zustand state management
│   │   └── types/             # TypeScript type definitions
│   ├── dist-lib/              # Compiled embeddable library build
│   ├── package.json
│   └── vite.config.ts
│
├── sam3/                       # Model files for Docker runs (volume-mounted)
│   ├── sam3.pt
│   └── config.json
│
└── README.md
```

## API Endpoints

Interactive docs available at `http://localhost:8000/docs`.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Health check |
| `GET` | `/` | API info |
| `POST` | `/api/upload` | Upload an image for annotation |
| `GET` | `/api/image/{image_id}` | Retrieve uploaded image as JPEG |
| `POST` | `/api/register-image` | Register an image by URL or base64 |
| `POST` | `/api/segment/text` | Segment using a text prompt |
| `POST` | `/api/segment/points` | Segment using point prompts |
| `POST` | `/api/segment/box` | Segment using a bounding box |
| `POST` | `/api/segment/template` | Segment using template matching |
| `POST` | `/api/segment/reset-mask/{image_id}` | Clear mask logits for an image |
| `POST` | `/api/reset/{image_id}` | Remove all state for an image |
| `POST` | `/api/export/coco` | Export annotations as COCO JSON + ZIP |
| `POST` | `/api/export/coco/validate` | Validate COCO export payload |

## Usage Workflow

1. **Upload Images**: Click "Upload" button or drag and drop images
2. **Select Category**: Choose or add annotation category in the right panel
3. **Select Tool**: Use toolbar or keyboard shortcuts to select annotation method
4. **Annotate**:
   - **Text**: Enter description and press Enter
   - **Points**: Left-click to add, right-click to remove, press Enter to confirm
   - **Box**: Drag to draw selection box
   - **Polygon**: Click to add vertices, click start point or press Enter to close
5. **Fine-Tune**:
   - Drag control points to adjust boundaries after selecting annotation
   - Double-click boundary lines to add extra control points
   - Use middle mouse button to drag and pan canvas
6. **Manage Annotations**: 
   - View, select, hide, or delete in the right panel list
   - Use Tag button to quickly change annotation category
   - `Shift + Click` for range multi-select
7. **Copy & Paste**: Select annotations with `Ctrl+C`, paste with `Ctrl+V`
8. **Export Results**: Click "Export" to download ZIP containing COCO JSON and images

## Tech Stack

### Backend
- **FastAPI** — high-performance Python web framework
- **SAM3** — Meta's Segment Anything with Concepts model
- **PyTorch 2.7 + CUDA 12.6** — deep learning runtime
- **Pydantic v2** — request/response data validation
- **Uvicorn** — ASGI server
- **Docker + NVIDIA Container Toolkit** — containerised GPU deployment

### Frontend
- **React 18** — UI framework
- **TypeScript** — type safety
- **Vite 5** — dev server and bundler (dev port: 5766)
- **MUI (Material UI v7)** — component library and theming
- **Zustand** — lightweight state management
- **Axios** — HTTP client
- **Framer Motion** — animations
- **Lucide React** — icon library
- **JSZip** — client-side ZIP packaging for COCO export

## License

The modifications, UI code, and orchestration logic in this repository are licensed under the [Apache License 2.0](LICENSE).

This project incorporates elements from the [SAM3_Annotation_Tool](https://github.com/software-ai-life/SAM3_Annotation_Tool) by software-ai-life, originally released under the MIT License. See the [NOTICE](NOTICE) file for the original copyright notice.

The underlying SAM 3 model weights and logic are subject to the [Meta SAM 3 Research License](https://github.com/facebookresearch/sam3). This repository does not distribute SAM 3 weights.

## References

- [SAM3: Segment Anything with Concepts](https://github.com/facebookresearch/sam3)
- [Original SAM3_Annotation_Tool by software-ai-life](https://github.com/software-ai-life/SAM3_Annotation_Tool)
- [COCO Dataset Format](https://cocodataset.org/#format-data)

## Inherited Features from the Original SAM3_Annotation_Tool

This professional refactor retains the core functionality and workflow of the original [SAM3_Annotation_Tool](https://github.com/software-ai-life/SAM3_Annotation_Tool), including:

- **Annotation Methods**: Text prompt, point prompt (add/remove), box selection, template matching, and manual polygon annotation.
- **Fine Editing**: Drag control points, double-click to add points, and fixed-size control handles.
- **Canvas Operations**: Mouse wheel zoom, middle-click pan, and pointer tool drag.
- **Export Format**: COCO JSON + images ZIP export, including masks, bounding boxes, and categories.
- **Auto Save**: Automatic saving to browser LocalStorage and recovery after unexpected closure.
- **Copy & Paste, Multi-Select**: Standard keyboard shortcuts for annotation management.
- **Category Management**: Quick category change, visual indication, and instant color update.
- **Keyboard Shortcuts**: Tool switching, edit, selection, and canvas operations.
- **Project Structure**: FastAPI backend, React + TypeScript frontend, Docker support, and Hugging Face/Meta SAM3 model integration.
- **API Endpoints**: Upload, segment (text, points, box, template), export, and reset endpoints.

All original annotation logic, data formats, and user workflows are preserved unless explicitly enhanced or replaced in this version.
