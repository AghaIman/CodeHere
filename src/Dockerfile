FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY ./src ./src
COPY ./public ./src
RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules
CMD [ "serve", "-s", "build" ]