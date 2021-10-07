FROM node:14
# Create app directory

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

WORKDIR /usr/src/app
RUN npm install

RUN npm install pm2 -g

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build
COPY ./build .
EXPOSE 8080
CMD ["pm2-runtime","index.js"]