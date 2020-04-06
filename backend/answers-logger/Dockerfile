### STAGE 1: Build ###
FROM node:12 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM node:12
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
CMD ["node", "./build/app.js"]