FROM nginx:alpine
COPY ./build /usr/share/nginx/html/build
COPY ./assets /usr/share/nginx/html/assets
COPY ./styles /usr/share/nginx/html/styles
COPY ./index.html /usr/share/nginx/html/index.html

