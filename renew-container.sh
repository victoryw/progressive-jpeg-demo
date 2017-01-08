#!/bin/bash

docker ps -a | awk '{ print $1,$2 }' | grep victoryw/progressive-jpge-demo | awk '{print $1 }' | xargs -I {} docker rm {} -f

docker rmi victoryw/progressive-jpge-demo

docker build -t victoryw/progressive-jpge-demo .

docker run -d -p 8080:80 victoryw/progressive-jpge-demo