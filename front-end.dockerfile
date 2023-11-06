FROM node:alpine

# Set the working directory in the container
WORKDIR /app

COPY package*.json .

# Install node packages
RUN npm install

# Copy your project directory (locally) to the current directory of the Docker image (/app)
COPY . .

# Expose port 3000 on the container
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]