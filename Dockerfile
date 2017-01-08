FROM httpd:2.4
COPY ./index.html /usr/local/apache2/htdocs/
COPY ./images/ /usr/local/apache2/htdocs/images/
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf

EXPOSE 80