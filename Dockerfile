ARG NODE_VERSION=lts-alpine

FROM node:${NODE_VERSION} AS install-dependencies

WORKDIR /app

COPY package.json .

RUN npm install --verbose


FROM node:${NODE_VERSION} AS build

WORKDIR /app

COPY --from=install-dependencies /app .

COPY . .

RUN npm run build


FROM nginx:stable-alpine AS deploy

COPY --from=build /app/dist /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf
