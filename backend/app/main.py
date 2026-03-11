"""
SAM3 Annotation Tool - Backend API
"""
import os
from pathlib import Path
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

# Load environment variables from .env file
# Look for .env in project root (two levels up from app/)
env_path = Path(__file__).parent.parent.parent / '.env'
if env_path.exists():
    load_dotenv(env_path)
    print(f"Loaded environment variables from: {env_path}")
else:
    print(f"No .env file found at: {env_path}")

from app.routers import annotation, export

BACKEND_ROOT = Path(__file__).resolve().parent.parent
FRONTEND_DIST_DIR = BACKEND_ROOT / "frontend_dist"

app = FastAPI(
    title="SAM3 Annotation Tool API",
    description="Backend API for SAM3-powered image annotation",
    version="1.0.0"
)

# CORS middleware for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "http://localhost:5702"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(annotation.router, prefix="/api", tags=["annotation"])
app.include_router(export.router, prefix="/api", tags=["export"])


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# --------------- Frontend static serving ---------------
# Mount the entire built frontend directory *last* so API routes take priority.
# A catch-all handler returns index.html for any path that doesn't match an API
# route or a real static file (SPA client-side routing support).
if FRONTEND_DIST_DIR.exists():
    @app.get("/")
    async def serve_index():
        return FileResponse(FRONTEND_DIST_DIR / "index.html")

    # Mount static files (assets/, vite.svg, etc.) under root
    app.mount("/", StaticFiles(directory=str(FRONTEND_DIST_DIR), html=True), name="frontend")
else:
    @app.get("/")
    async def root():
        return {"message": "SAM3 Annotation Tool API", "version": "1.0.0"}
