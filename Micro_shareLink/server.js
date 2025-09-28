// server.js

require('dotenv').config(); // Carrega variáveis do arquivo .env
const express = require('express'); // Framework para criar o servidor HTTP
const mongoose = require('mongoose'); // ORM para MongoDB
const { nanoid } = require('nanoid'); // Gera códigos únicos e curtos
const SharedLink = require('./Models/shareLinkModel'); // Importa o modelo de dados

const app = express();
app.use(express.json()); // Permite receber JSON no corpo das requisições

// Conecta ao banco de dados MongoDB usando a URI do .env
mongoose.connect(process.env.MONGO_URI);

// Rota POST para gerar o link compartilhável
app.post('/share-link', async (req, res) => {
  const { publicationId, userId, channel } = req.body;

  // Gera um código curto único para o link
  const shortCode = nanoid(8);

  // Monta a URL final com parâmetros de rastreamento
  const shortUrl = `${process.env.BASE_URL}/p/${publicationId}?ref=${channel}&uid=${userId}&s=${shortCode}`;

  // Salva os dados no banco para fins de rastreamento/analytics
  await SharedLink.create({ publicationId, userId, channel, shortCode });

  // Retorna a URL gerada para o cliente
  res.json({ shortUrl });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log('Micro serviço rodando na porta 3000'));