### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /app
RUN npm install -g @angular/cli
COPY package.json ./
RUN npm install
COPY . .
RUN ng build --prod
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/footprint-calculator /usr/share/nginx/html