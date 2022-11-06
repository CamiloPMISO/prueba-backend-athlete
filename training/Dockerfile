# Base image
FROM public.ecr.aws/docker/library/node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

ARG POSTRES_HOST_ARG
ENV POSTRES_HOST=$POSTRES_HOST_ARG

ARG PROD_URL_ARG
ENV PROD_URL=$PROD_URL_ARG

ENV PORT=3000

# Creates a "dist" folder with the production build
RUN npm run build:prod

EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]