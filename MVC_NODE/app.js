//importando os modulos do framework
const express = require('express');
const app = express();
//importando o modulo de rotas que criamos
const LoginRoute = require("./routes/loginRoute");

//usado para adicionar o Router ao caminho de gerenciamento de middleware
app.use('/', LoginRoute);

//vamos adicionar o template engine EJS e o endereçamento das views
app.set('view engine', 'ejs');
app.set('views', './view');

app.listen(3000, function(){
    console.log("APP rodando na porta 3000");
});