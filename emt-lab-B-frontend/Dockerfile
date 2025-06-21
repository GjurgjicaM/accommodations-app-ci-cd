# ---- build ----
FROM node:20 AS builder
WORKDIR /src
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- nginx serve ----
FROM nginx:1.27
COPY --from=builder /src/dist /usr/share/nginx/html
EXPOSE 80
