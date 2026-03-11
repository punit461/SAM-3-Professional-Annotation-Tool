# SAM3 Annotation Tool - Backend

FastAPI backend providing segmentation API endpoints powered by Meta's SAM3 model.

---

## Project Structure

```
SAM3_Annotation_Tool/
├── backend/                  # This directory — FastAPI app, Dockerfile, compose
│   ├── app/
│   │   ├── main.py
│   │   ├── routers/
│   │   ├── services/
│   │   └── sam3/             # Model files for local Python runs (see below)
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── requirements.txt
├── frontend/
└── sam3/                     # Model files for Docker runs (mounted as volume)
    ├── sam3.pt
    └── config.json
```

---

## Download Model Files

Get `sam3.pt` and `config.json` from Hugging Face:

```bash
# Authenticate first (one-time)
huggingface-cli login

# Download with huggingface_hub
python - <<'PY'
from huggingface_hub import hf_hub_download
hf_hub_download(repo_id="facebook/sam3", filename="sam3.pt",     local_dir=".")
hf_hub_download(repo_id="facebook/sam3", filename="config.json", local_dir=".")
PY
```

- **For Docker** → place both files in `SAM3_Annotation_Tool/sam3/` (project root level, next to `backend/`)
- **For local Python** → place both files in `backend/app/sam3/`

---

## Option A — Docker (recommended)

### Prerequisites

- Docker Desktop with GPU support enabled
- NVIDIA Container Toolkit
- CUDA 12.6 compatible driver

### Build and run

All commands are run from the `backend/` directory:

```bash
cd backend

# Build image and start container
docker compose up -d --build

# View logs
docker compose logs -f backend

# Stop
docker compose down
```

The container mounts `../sam3` (i.e. `SAM3_Annotation_Tool/sam3/`) into `/app/sam3` inside the container.  
SAM3 checkpoint path inside the container: `/app/sam3/sam3.pt`

To enable eager model loading at startup (instead of on first request):

```yaml
# docker-compose.yml
environment:
  SAM3_EAGER_LOAD: "1"
```

### Health check

```bash
curl http://localhost:8000/health
# {"status":"healthy"}
```

---

## Option B — Local Python

### Prerequisites

- Python 3.10+
- PyTorch 2.7+ with CUDA 12.6 (or CPU-only for testing)

### 1. Create a virtual environment

```bash
cd backend

# Using venv
python -m venv .venv
.venv\Scripts\activate        # Windows
# source .venv/bin/activate   # Linux / macOS

# Or using uv
uv venv --python 3.10
.venv\Scripts\activate
```

### 2. Install PyTorch (CUDA build)

```bash
pip install torch==2.7.0 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu126
```

For CPU-only:

```bash
pip install torch torchvision torchaudio
```

### 3. Install SAM3

```bash
git clone https://github.com/facebookresearch/sam3.git ../sam3_repo
pip install -e ../sam3_repo
```

### 4. Install remaining dependencies

```bash
pip install -r requirements.txt
```

### 5. Place model files

Copy `sam3.pt` and `config.json` into `backend/app/sam3/`:

```
backend/app/sam3/
├── sam3.pt
└── config.json
```

Alternatively, set environment variables (create a `.env` file at `SAM3_Annotation_Tool/.env`):

```env
SAM3_CHECKPOINT_PATH=/absolute/path/to/sam3.pt
SAM3_MODEL_DIR=/absolute/path/to/sam3/folder
```

### 6. Start the server

Run from the `backend/` directory:

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

---

## API Endpoints

Interactive docs available at `http://localhost:8000/docs` once the server is running.

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Health check |
| `GET` | `/` | API info |
| `POST` | `/api/upload` | Upload an image for annotation |
| `GET` | `/api/image/{image_id}` | Retrieve uploaded image as JPEG |
| `POST` | `/api/register-image` | Register an image by URL or base64 |
| `POST` | `/api/segment/text` | Segment using a text prompt |
| `POST` | `/api/segment/points` | Segment using point prompts |
| `POST` | `/api/segment/box` | Segment using a bounding box prompt |
| `POST` | `/api/segment/template` | Segment using template matching |
| `POST` | `/api/segment/reset-mask/{image_id}` | Clear mask logits for an image |
| `POST` | `/api/reset/{image_id}` | Remove all state for an image |
| `POST` | `/api/export/coco` | Export annotations in COCO JSON format |
| `POST` | `/api/export/coco/validate` | Validate COCO export payload |
