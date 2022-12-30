FROM node:14-alpine

# Create a directory for the app
WORKDIR /app

# Copy the production build artifacts to the container
COPY package.json .

COPY web-build .

COPY server .

# Install the dependencies
RUN yarn --production

RUN source .env

# Expose the app's port
EXPOSE $DOCKER_PORT

# Start the app
CMD ["yarn", "start"]
