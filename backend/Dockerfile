FROM node:16.17.0
WORKDIR /backend
COPY package*.json ./
RUN npm install --force
COPY . .

EXPOSE 5003
CMD ["npm", "start"] 