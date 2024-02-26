FROM node:alpine AS build
WORKDIR /
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
RUN npm install
RUN npm run build

FROM httpd:2.4 AS final
WORKDIR /usr/local/apache2/htdocs/
COPY --from=build ./build/ .