FROM node:9
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN yarn install && yarn run build
EXPOSE 3000
CMD [ "yarn", "start"]
