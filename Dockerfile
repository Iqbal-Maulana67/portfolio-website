FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# This Dockerfile sets up a Node.js application environment using the official Node.js 22 Alpine image.
# It installs the necessary dependencies and starts the application on port 3000.
# To build the Docker image, use: docker build -t portfolio-app .
# To run the Docker container, use: docker run -p 3000:3000 portfolio-app
# Replace 'my-node-app' with your desired image name.