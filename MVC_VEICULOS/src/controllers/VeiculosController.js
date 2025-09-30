const VeiculosModel = require('../models/VeiculosModel');
const veiculoStore = new VeiculosModel(); // instância que armazena os veículos


exports.exibirFormulario = (req, res) => {
  res.render('VeiculosHome', { saved: false });
};

exports.salvarVeiculo = (req, res) => {
  const { modelo, marca } = req.body;
  veiculoStore.Adicionar(modelo, marca);
  res.render('VeiculosHome', { saved: true });
};

exports.listarVeiculos = (req, res) => {
  const lista = veiculoStore.ExibirTodos();
  res.render('VeiculosList', { veiculos: lista });
};

exports.excluirVeiculo = (req, res) => {
  const { modelo } = req.params;
  veiculoStore.Excluir(modelo);
  res.redirect('/listar');
};

exports.exibirEdicao = (req, res) => {
  const { modelo } = req.params;
  const veiculo = veiculoStore.ExibirTodos().find(v => v.modelo === modelo);

  if (!veiculo) {
    return res.status(404).send('Veículo não encontrado');
  }

  res.render('VeiculosEdit', { veiculo });
};

exports.editarVeiculo = (req, res) => {
  const { modeloAntigo, modelo, marca } = req.body;
  veiculoStore.Editar(modeloAntigo, modelo, marca);
  res.redirect('/listar');
};



exports.contarVeiculos = (req, res) => {
  const total = veiculoStore.ExibirTodos().length;
  res.send(`Total de veículos: ${total}`);
};