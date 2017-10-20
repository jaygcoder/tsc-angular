# Node Alpine
FROM node:6-alpine

# Set Environment variables
ENV NODE_ENV development
ENV LAST_UPDATED 20171020T073900
#ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# Install Angular globally, then clean the cache.
RUN npm install -g @angular/cli && npm cache clean && rm -rf ~/.npm

# Copy all files to image
COPY . /app

# Go to that folder
WORKDIR /app

# Install dependencies, then clean the cache
RUN npm install --only=prod && npm cache clean && rm -rf ~/.npm

# Expose port 8080 to the outside world
EXPOSE 80

# Switch user to node, best practice
USER node

# Run the thing using ng serve, best practice
CMD ["ng", "serve"]
