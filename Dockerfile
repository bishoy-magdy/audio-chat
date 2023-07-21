# nginx v1.25.1
FROM nginx@sha256:08bc36ad52474e528cc1ea3426b5e3f4bad8a130318e3140d6cfe29c8892c7ef

WORKDIR /temp/frontend

COPY ./client/dist .

COPY ./nginx.conf /etc/nginx/

EXPOSE 8080

CMD [ "nginx" , "-g",  "daemon off;" ]

