
// criar a classe Veículos
module.exports = class Veiculo{
    veiculos=[];
    constructor(modelo, marca)
    {
        this.modelo = modelo;
        this.marca = marca;
    };
};


Adicionar(modelo, marca) {
    let veiculos = new Veiculo(modelo, marca);
    this.veiculos = push (veiculos);
};    

ExibirTodos(){
    return this.veiculos;
};

Excluir(){
    const index = this.veiculos.findIndex((x) => x.modelo == modelo);
    this.veiculos.splice(index,1);
};

Editar(){
    const veiculos
}