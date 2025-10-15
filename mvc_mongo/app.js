const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const userRoute = require('../mvc_mongo/src/routes/userRoute')
const projectRouter = require('./src/routes/projectRoute');
app.use(userRoute);

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Fatec';
const mongoDB = url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console,'Erro ao conectar ao MongoDB'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen (3000, () => {
    console.log('Servidor em execução na porta 3000');
});

