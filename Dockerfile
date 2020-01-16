# Build
FROM node as build-deps
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

# Servir
FROM nginx
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY ./Docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]