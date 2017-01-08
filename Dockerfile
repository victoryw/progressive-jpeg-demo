FROM httpd:2.4
COPY ./dist/index.html /usr/local/apache2/htdocs/
COPY ./dist/single-image/ /usr/local/apache2/htdocs/single-image/
COPY ./dist/images/ /usr/local/apache2/htdocs/images/
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf

EXPOSE 80