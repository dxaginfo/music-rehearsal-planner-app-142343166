FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

COPY . .

RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/dist ./dist/

RUN npm ci --only=production

# Generate Prisma client
RUN npx prisma generate

# Set environment variables
ENV NODE_ENV=production

# Expose the port
EXPOSE 8000

# Start the server
CMD ["node", "dist/index.js"]