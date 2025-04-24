FROM node:18

# Cria diretório de trabalho
WORKDIR /app

# Copia os arquivos para dentro da imagem
COPY . .

# Instala dependências
RUN npm install

# Porta que será usada
EXPOSE 8080

# Comando de inicialização
CMD ["npm", "start"]
