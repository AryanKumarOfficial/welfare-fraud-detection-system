# =========================
# Builder
# =========================
FROM node:22-bullseye-slim AS builder

WORKDIR /app

# System dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    python3 \
    python3-dev \
    python-is-python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Enable pnpm
RUN corepack enable \
    && corepack prepare pnpm@11.8.0 --activate

# Copy workspace manifests first (better cache)
COPY package.json ./
COPY pnpm-workspace.yaml ./
COPY bun.lock* ./
COPY tsconfig.json ./

# Copy source
COPY apps ./apps
COPY packages ./packages
COPY services ./services

# Copy pnpm config
COPY .npmrc ./

# Install dependencies
RUN pnpm install --no-frozen-lockfile

# Build web app
RUN pnpm --filter web build

# =========================
# Runtime
# =========================

FROM node:22-bullseye-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./apps/web/public

EXPOSE 3000

CMD ["node", "apps/web/server.js"]