# # --------------------------
# # 1) Build Stage
# # --------------------------
# FROM node:18-alpine AS builder
# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # --------------------------
# # 2) Production Stage
# # --------------------------
# FROM node:18-alpine
# WORKDIR /app

# COPY --from=builder /app ./

# EXPOSE 3000
# CMD ["npm", "start"]







# # --------------------------
# # 1) Build Stage
# # --------------------------
# FROM node:18-alpine AS builder
# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build


# # --------------------------
# # 2) Production Stage
# # --------------------------
# FROM node:18-alpine
# WORKDIR /app

# COPY --from=builder /app ./

# ENV NODE_ENV=production

# EXPOSE 3000
# CMD ["npm", "start"]





# # 1) Build Stage
# FROM node:18-alpine AS builder
# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # 2) Production (lean) stage
# FROM node:18-alpine
# WORKDIR /app

# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/.next .next
# COPY --from=builder /app/public public

# RUN npm install --omit=dev

# EXPOSE 3000
# CMD ["npm", "start"]

# # This ensures ONLY needed final build files get inside container, not the whole project.






# # --------------------------
# # 1) Build Stage
# # --------------------------
# FROM node:18-alpine AS builder
# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build


# # --------------------------
# # 2) Production Stage (Optimized)
# # --------------------------
# FROM node:18-alpine
# WORKDIR /app

# # copy only required build output, not full project
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public

# RUN npm install --omit=dev   # install only prod deps

# EXPOSE 3000
# CMD ["npm", "start"]





# ----------- 1) BUILD STAGE -----------
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ----------- 2) RUNTIME STAGE -----------
FROM node:18-alpine
WORKDIR /app

# copy only necessary build output
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev   # install only prod deps

EXPOSE 3000
CMD ["npx", "next", "start"]
