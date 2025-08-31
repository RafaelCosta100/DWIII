const veiculos = [{id: 1, nome: "Fiat"}, {id:2, nome: "Celta"},{id: 3, nome: "Marea"}];

app.put('/',(req,res) =>{
    const index = veiculos.findIndex(x => x.id == req.query.id);
    veiculos[index] = {id: req.query.id, name: req.body.name}
    res.send(JSON.stringify(veiculos))
})