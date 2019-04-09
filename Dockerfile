FROM node:carbon

WORKDIR /app
COPY package.json ./
RUN npm i

COPY ./assets ./assets
COPY ./p5adapter ./p5adapter
COPY ./src ./src

# CMD node ./src/sketch.js | cut -d, -f2 | base64 -d
CMD node ./src/sketch.js