PROJETO DE MICRO SERVIÇO PARA COMPARILHAMENTO DE LINK DA PUBLICAÇÃO DO FEED

Tecnologia usada: NODE.JS

instalação de dependencias:
npm init -y
npm install express mongoose nanoid dotenv


banco de dados: MongoDB


Estrutura de pastas:
micro-share-link/
├── models/
│   └── SharedLink.js         # Modelo do MongoDB
├── routes/
│   └── shareLink.js          # Rota principal do serviço
├── controllers/
│   └── shareLinkController.js # Lógica de geração e salvamento
├── .env                      # Configurações sensíveis
├── server.js                 # Ponto de entrada do micro serviço
├── package.json              # Dependências e scripts
