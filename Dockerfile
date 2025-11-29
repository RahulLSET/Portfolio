# -------- 1: Build Stage --------
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install      # installs all deps

COPY . .
RUN npm run build    # generates .next folder inside container


# -------- 2: Run Stage --------
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev   # only production deps

EXPOSE 3000
CMD ["npx", "next", "start"]
