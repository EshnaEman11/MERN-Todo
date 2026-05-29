FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Exposing port 5000 to match your actual Express configuration
EXPOSE 5000

# Using npm run dev to keep nodemon watching files during testing
CMD ["npm", "run", "dev"]