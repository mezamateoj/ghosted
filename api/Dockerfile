FROM node:alpine

WORKDIR /app
EXPOSE 3001
COPY package.json ./
COPY prisma ./prisma/
RUN npm install
COPY ./ ./

CMD ["npm", "start"]