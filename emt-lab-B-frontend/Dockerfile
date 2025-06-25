# ---- build ----
FROM node:20 AS builder
WORKDIR /src
COPY package*.json ./
RUN npm ci
COPY . .

ARG VITE_BACKEND_HOST
ENV VITE_BACKEND_HOST=${VITE_BACKEND_HOST}

ARG VITE_BACKEND_PORT
ENV VITE_BACKEND_PORT=${VITE_BACKEND_PORT}

ARG VITE_BACKEND_BASE_PATH
ENV VITE_BACKEND_BASE_PATH=${VITE_BACKEND_BASE_PATH}

RUN npm run build

# ---- nginx serve ----
FROM nginx:1.27
COPY --from=builder /src/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]