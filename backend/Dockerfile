# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
FROM node:20-alpine AS frontend-builder

WORKDIR /frontend

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build


FROM nvidia/cuda:12.6.0-runtime-ubuntu22.04

ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    REQUESTS_CA_BUNDLE=/etc/ssl/certs/ca-certificates.crt

# All system packages in one layer: Python, git, and OpenCV native libs
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    git \
    python3 \
    python3-pip \
    python-is-python3 \
    libglib2.0-0 \
    libgl1 \
    libsm6 \
    libxext6 \
    libxrender1 \
    libxcb1 \
    && update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY backend/ ./

RUN pip3 install --no-cache-dir \
    torch==2.7.0 \
    torchvision \
    torchaudio \
    --index-url https://download.pytorch.org/whl/cu126

RUN git clone --depth 1 https://github.com/facebookresearch/sam3.git /opt/sam3

ENV PYTHONPATH=/opt/sam3

RUN pip3 install --no-cache-dir -r requirements.txt

COPY --from=frontend-builder /frontend/dist /app/frontend_dist
COPY sam3/ /app/sam3/

ENV SAM3_CHECKPOINT_PATH=/app/sam3/sam3.pt \
    SAM3_MODEL_DIR=/app/sam3 \
    SAM3_BPE_PATH=/opt/sam3/sam3/assets/bpe_simple_vocab_16e6.txt.gz

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
