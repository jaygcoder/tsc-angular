# Using the NGINX server this time, for production testing...
FROM nginx:latest

COPY dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80
