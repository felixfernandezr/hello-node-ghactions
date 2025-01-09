# Setup Node.js runtime
FROM node:16-alpine3.19

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Update semver and other dependencies first
RUN npm install semver@7.5.2

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "app.js"]