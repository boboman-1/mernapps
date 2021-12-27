FROM node
WORKDIR /usr/src/app
COPY . .
# COPY package.json .
RUN npm install
EXPOSE 8080
CMD "node" "api/server.js"