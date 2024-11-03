FROM node:20-alpine as builder

WORKDIR /app

COPY . .

ENV NODE_ENV=prod

RUN apk add --no-cache make pkgconfig build-base

RUN npm install --omit=dev

RUN npm run build

FROM node:20-alpine

WORKDIR /app

RUN npm install -g npm@10.4.0

COPY --from=builder /app/build /app/build
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

ENV NODE_ENV=production

CMD ["node", "build/server.js"]
