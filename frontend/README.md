# SAM3 Annotation Tool - Frontend

The frontend is a React + TypeScript + Vite application located in `../frontend/`.

### Prerequisites

- Node.js 18+

### 1. Install dependencies

```bash
cd ../frontend
npm install
```

### 2. Development server

```bash
npm run dev
```

Starts Vite dev server at `http://localhost:5173` with hot-module reload.  
Make sure the backend is running at `http://localhost:8000` first.

### 3. Production build (standalone app)

```bash
npm run build
```

Outputs to `frontend/dist/`. Serve with any static file server:

```bash
npm run preview   # local preview of the production build
```

### 4. Library build (embeddable component)

```bash
npm run build:lib
```

Outputs to `frontend/dist-lib/` as ESM + CJS bundles (`sam3-annotation-tool.mjs` / `.cjs`).  
Import the component in another app:

```ts
import { SAM3AnnotationTool } from 'sam3-annotation-tool';
import 'sam3-annotation-tool/style.css';
```

### Available scripts

| Script | Command | Description |
|--------|---------|-------------|
| `npm run dev` | `vite` | Dev server with HMR |
| `npm run build` | `tsc && vite build` | Production app build |
| `npm run build:lib` | `vite build --mode lib` | Embeddable library build |
| `npm run preview` | `vite preview` | Preview production build locally |
| `npm run lint` | `eslint` | Lint TypeScript/TSX files |

---

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `SAM3_CHECKPOINT_PATH` | *(auto-detected)* | Absolute path to `sam3.pt` |
| `SAM3_MODEL_DIR` | *(auto-detected)* | Directory containing model files |
| `SAM3_BPE_PATH` | *(bundled with SAM3)* | Path to BPE vocab file |
| `SAM3_GPU_INDEX` | `0` | CUDA device index |
| `SAM3_EAGER_LOAD` | `0` | Set to `1` to load model at startup |
