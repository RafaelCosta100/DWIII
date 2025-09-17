//importando a classe do model
const loginModel = require("../model/loginModel");
exports.getLogin = ((req, res) => {
    //instanciando a classe do model
    const login = new loginModel();
    
    //exibindo a chamada da função do model
    res.send(`<h1>${login.isLogged()}</h1>`);
});
