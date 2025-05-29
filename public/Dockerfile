# 1. Use official Node.js image as the build environment
FROM node:20-alpine AS builder

WORKDIR /app

# 2. Install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
  elif [ -f yarn.lock ]; then yarn install; \
  else npm install; fi

# 3. Copy the rest of the code
COPY . .

# 4. Build the Next.js app
RUN npm run build

# 5. Production image, copy built assets from builder
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Only copy necessary files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# 6. Start the Next.js app
CMD ["npm", "start"]