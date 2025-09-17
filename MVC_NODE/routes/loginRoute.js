const express = require('express');
const router = express.Router();

const LoginController = require("../controller/loginController")

router.get("/login", LoginController.getLogin);

//rota para a view
router.get("/logged", LoginController.getIsLogged)


module.exports = router;
