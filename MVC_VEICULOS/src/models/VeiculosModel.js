// criar classe veiculo
module.exports = class VeiculosModel {
  veiculos = [];

  constructor(modelo, marca) {
    this.modelo = modelo;
    this.marca = marca;
  }

  Adicionar(modelo, marca) {
    const veiculo = new VeiculosModel(modelo, marca);
    this.veiculos.push(veiculo);
  }

  ExibirTodos() {
    return this.veiculos;
  }

  Excluir(modelo) {
    const index = this.veiculos.findIndex(v => v.modelo === modelo);
    if (index !== -1) this.veiculos.splice(index, 1);
  }

  Editar(modeloAntigo, novoModelo, novaMarca) {
    const index = this.veiculos.findIndex(v => v.modelo === modeloAntigo);
    if (index !== -1) {
      this.veiculos[index].modelo = novoModelo;
      this.veiculos[index].marca = novaMarca;
    }
  }
};