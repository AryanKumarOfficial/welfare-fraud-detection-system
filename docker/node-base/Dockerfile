FROM node:22-bullseye-slim

# Install OS-level build deps for native modules
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    bash \
    curl \
    python3 \
    python3-dev \
    python-is-python3 \
    build-essential \
    make \
    g++ \
    libvips-dev \
    pkg-config \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install Bun CLI for workspace scripts like bun run db:migrate and bun run import-csv.ts
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Enable pnpm
RUN corepack enable \
    && corepack prepare pnpm@11.8.0 --activate

WORKDIR /app

ENV PYTHON=/usr/bin/python3
ENV CI=true
