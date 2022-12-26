FROM node:14-alpine

# Create a directory for the app
WORKDIR /app

# Copy the production build artifacts to the container
COPY package.json .

COPY web-build .

COPY server .

RUN ls -a

# Install the dependencies
RUN yarn --production

# Expose the app's port
EXPOSE 8080

# Start the app
CMD ["yarn", "start"]
