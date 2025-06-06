FROM node:18-alpine
WORKDIR /app
# Обновляем пакеты Alpine для устранения уязвимостей
RUN apk update && apk upgrade
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]