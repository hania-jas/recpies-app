FROM node:12.18.2 AS build

WORKDIR /app

COPY package*.json /app/

RUN npm install
COPY . .
RUN npm run build


FROM nginx
COPY --from=build /app/build/ /usr/share/nginx/html