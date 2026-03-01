# Stage 1: Build stage
FROM oven/bun:1.2 AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

ENV APP_MODE=PROD
ENV API_URL=http://localhost:8080
ENV API_TOKEN=build_token_placeholder

RUN bun run build

# Stage 2: Run stage
FROM oven/bun:1.2-alpine AS runner

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
# Il est recommandé de copier aussi le lockfile pour la prod
COPY --from=builder /app/bun.lock ./bun.lock

# 🔥 OPTIMISATION 2 : Chaînage des commandes et nettoyage du cache Bun
RUN bun install --production --frozen-lockfile && \
    rm -rf ~/.bun/install/cache

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV APP_MODE=PROD
ENV API_URL=http://localhost:8080
ENV API_TOKEN=build_token_placeholder

CMD ["bun", "run", "build/index.js"]