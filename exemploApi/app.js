const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


let nomes = []

app.post('/', (req,res) => {
    nomes.push(req.body.nome)
    res.send(req.body.nomes)
})

//first endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const veiculos = [{id: 1, nome: "Fiat"}, {id:2, nome: "Celta"},{id: 3, nome: "Marea"}];

app.put('/',(req,res) =>{
    const index = veiculos.findIndex(x => x.id == req.query.id);
    veiculos[index] = {id: req.query.id, nome: req.body.nome}
    res.send(JSON.stringify(veiculos))
})

app.delete('/', (req,res) =>{
  const index = veiculos.findIndex(x=> x.id == req.query.id);
  veiculos.splice(index,1);
  res.send(JSON.stringify(veiculos))
})
app.post('/', (req,res) => {
    id.push(req.query.id)
    nome.push(req.body.nome)
    res.send(req.body.nome)
})