//importando a classe do model
const loginModel = require("../model/loginModel");
//instanciando a classe
const login = new loginModel();
//acessando o método e armazenando o retorno na variável
const logged = login.isLogged();
//exibe o texto na tela
exports.getLogin = ((req, res) => {
     res.send(`<h1>${logged}</h1>`);
});

//renderizando o conteudo da variável logged na view LoginView
exports.getIsLogged = ((req, res) => {
       res.render("LoginView", { logged : logged });
});
