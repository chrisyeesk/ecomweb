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

# Install typescript globally to use the tsc command to automatically convert typescript files to javascript files
RUN npm install typescript -g

# rimraf deletes all the unused converted .js and .cjs files
RUN npm install -g rimraf
RUN rimraf ./dist && tsc

# nodemon updates the server on file changes
RUN npm install -g nodemon

# Command to run the application with nodemon
CMD ["npm", "run", "start"]
