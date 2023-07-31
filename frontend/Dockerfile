FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM steebchen/nginx-spa:stable
COPY --from=build /app/build /app
EXPOSE 80
CMD ["nginx"]