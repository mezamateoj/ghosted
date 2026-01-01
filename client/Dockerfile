# syntax=docker.io/docker/dockerfile:1

FROM node:20-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* .npmrc* ./
RUN npm ci

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY tailwind.config.js .
COPY postcss.config.js .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1


# Start Next.js in development mode based on the preferred package manager
CMD ["npm", "run", "dev"]
