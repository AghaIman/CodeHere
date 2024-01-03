FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install serve globally
RUN npm install -g serve

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Remove unnecessary dependencies
RUN rm -fr node_modules

# Expose the port on which the application will run
EXPOSE 5000

# Command to run the application
CMD ["serve", "-s", "build"]
