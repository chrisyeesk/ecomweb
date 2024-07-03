FROM node:20

WORKDIR /app

# Copy package.json and package-lock.json (if it exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy prisma schema
COPY prisma ./prisma

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

EXPOSE 8000

# Use CMD instead of ENTRYPOINT for more flexibility
CMD ["npm", "run", "dev"]