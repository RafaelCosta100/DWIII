# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /app

#Copia os arquivos
COPY . .

# Instala as dependências
RUN npm install express axios

# Expõe a porta que o serviço irá rodar
EXPOSE 3001

# Comando para iniciar o serviço
CMD ["node", "index.js"]