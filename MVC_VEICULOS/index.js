const express = require('express');
const bodyParser = require('body-parser');
const veiculosRoute = require('./src/routes/VeiculosRoute');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', veiculosRoute);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
