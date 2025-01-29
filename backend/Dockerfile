FROM node:22-alpine as builder

WORKDIR /app

COPY . .

ENV NODE_ENV=prod

RUN apk add --no-cache make pkgconfig build-base openssl nodejs npm

RUN npm install

FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=prod

RUN apk add openssl nodejs npm make pkgconfig build-base

COPY --from=builder /app /app/

RUN rm -rf /app/node_modules

RUN npm install
RUN npm run prisma generate

EXPOSE 3000