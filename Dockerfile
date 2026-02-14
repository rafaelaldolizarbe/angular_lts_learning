# Use uma imagem oficial do Nginx
FROM nginx:stable-alpine

# Copie os arquivos do build para o diretório padrão do Nginx
COPY ./dist/dtt_context /usr/share/nginx/html

# Substitua o arquivo de configuração padrão do Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80 para o tráfego HTTP
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]