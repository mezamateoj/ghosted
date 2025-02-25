# FROM node:alpine
FROM node:20-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app


COPY package.json package-lock.json ./
COPY prisma ./prisma/
RUN npm ci

COPY . /app
# EXPOSE 3001
RUN npx prisma generate --schema=prisma/schema.prisma
# RUN npx prisma generate
EXPOSE 8000

CMD ["npm", "start"]