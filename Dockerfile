FROM nginx:alpine
COPY index.html style.css script.js robots.txt sitemap.xml /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
