FROM node:18

WORKDIR /app

COPY frontend/ /app

RUN npm install
RUN npm run build

# Serve the build using a simple HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]
