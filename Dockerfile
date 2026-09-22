# Estágio 1: Build da aplicação Angular 17
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --configuration=production

# Estágio 2: Servir os arquivos estáticos com Nginx
FROM nginx:alpine
# Copia o build do Angular gerado no estágio anterior para a pasta pública do Nginx
COPY --from=build /app/dist/*/browser /usr/share/nginx/html
# Copia a nossa configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4002
CMD ["nginx", "-g", "daemon off;"]