FROM nginx:alpine
COPY index.html style.css script.js robots.txt sitemap.xml /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
