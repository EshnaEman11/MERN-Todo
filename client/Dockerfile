FROM node:18-alpine

WORKDIR /app

# Install a tiny, lightning-fast static file server globally inside the container
RUN npm install -g serve

# Copy your local built folder directly into the container
COPY dist ./dist

EXPOSE 8080

# Serve the dist folder on port 8080
CMD ["serve", "-s", "dist", "-l", "8080"]