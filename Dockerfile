# Вкажіть базовий образ із Node.js
FROM node:18

# Встановіть робочу директорію в контейнері
WORKDIR /app

# Скопіюйте package.json і package-lock.json (якщо є)
COPY package.json ./

# Встановіть залежності
RUN npm install

# Скопіюйте весь код проєкту в контейнер
COPY . .

# Вкажіть порт, який буде відкритий (3000 — це порт із вашого labels.js)
EXPOSE 3000

# Команда для запуску сервера
CMD ["node", "src/main.ts"]