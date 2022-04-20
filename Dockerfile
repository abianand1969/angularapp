#stage 1
# FROM node:latest as node
# WORKDIR /app
# COPY ./dist/. /app



#stage 2
FROM ubuntu/nginx:latest
COPY ./dist/firstapp /usr/share/nginx/html

# CMD ["bash"]