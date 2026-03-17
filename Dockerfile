# Use the lightweight Nginx Alpine image
FROM nginx:alpine

# Copy our frontend files into the Nginx html directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Nginx serves on port 80 by default
EXPOSE 80