const express = require('express');
const router = express.Router();
const controller = require('../controllers/VeiculosController');

// Rota para exibir o formulário de cadastro
router.get('/', controller.exibirFormulario);

// Rota para salvar um novo veículo
router.post('/cadastrar', controller.salvarVeiculo);

// Rota para listar todos os veículos
router.get('/listar', controller.listarVeiculos);

// Rota para excluir um veículo pelo modelo
router.get('/excluir/:modelo', controller.excluirVeiculo);

// Rota para editar um veículo
router.get('/editar/:modelo', controller.exibirEdicao);
router.post('/editar', controller.editarVeiculo);

// Rota para contar os veículos
router.get('/quantidade', controller.contarVeiculos);

module.exports = router;