# Use Node.js as the build environment
FROM node:16 AS build

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install project dependencies and Angular CLI
RUN npm install -g @angular/cli && npm install


# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular application for production
RUN ng build

# Use Nginx as the base image for serving static files
FROM nginx:alpine

# Copy the built Angular application files to the NGINX HTML directory
COPY --from=build /dist/app-financial-products /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
