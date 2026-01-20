# Use Node.js version 20
FROM node:20-alpine

# Create a folder inside the virtual container
WORKDIR /app

# Copy the shopping list and install tools
COPY package*.json ./
RUN npm install

# Copy your actual code (server.js)
COPY . .

# Open Port 5000
EXPOSE 5000

# Start the server
CMD ["npm", "start"]