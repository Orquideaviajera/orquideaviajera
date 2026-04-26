# =========================================
# Stage 1 — Build
# =========================================
FROM node:20-alpine AS build

WORKDIR /app

# Copia manifests primero para aprovechar la cache de Docker
COPY package.json package-lock.json* ./
RUN npm install

# Copia código fuente
COPY . .

# Build optimizado para producción
RUN npm run build

# =========================================
# Stage 2 — Servidor estático ligero
# =========================================
FROM nginx:1.27-alpine AS runtime

# Copia configuración de nginx adaptada (puerto 3000, SPA fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia el build estático
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
