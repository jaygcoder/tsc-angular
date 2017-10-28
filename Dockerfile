# Using Apache this time!
FROM httpd:2.4

# Copy to htdocs
COPY dist /usr/local/apache2/htdocs/

# Port 80, to be safe
EXPOSE 80