 const express = require('express')
 const app = express()
 const port = 3000
 app.use(express.json())

 app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

 let cursos = []

 let alunos = [
 {
 ra: 1, nome: "Diego", turma: "DSM",
 cursos: ["Javascript", "ReactJS", "Redux"]
 },
 {
 ra: 2, nome: "Leandro", turma: "DSM",
 cursos: ["VueJS", "Ruby on Rails", "Node"]
 }
 ];

 //get para mostrar todos os cadastros de alunos
 app.get('/', (req, res) => {
  const ra = req.query.ra
  if (ra){
    const aluno = alunos.findIndex(a => a.ra == ra)
    if (!aluno){
      return res.status(404).json({erro:"Aluno não encontrado"})
    }
    return res.json(aluno);
  }
   
  const index = alunos.findIndex(({ ra, nome, turma })=> ({ra, nome, turma}))
  res.json(alunos);
})

// post para cadastar novo aluno, com validação de ra existente
 app.post('/', (req, res) => {
    const ra = parseInt (req.query.ra)
    const {nome, turma, cursos} = req.body

    const alunosExistente = alunos.find(aluno => aluno.ra === ra)
    if(alunosExistente){
      return res.status(400).json({erro:"Aluno já cadastrado"})
    }
    alunos.push({ra:ra, nome:nome, turma:turma, cursos:cursos})
    res.status(201).json(alunos)
})

// put para alterar um cadastro já existente, buscando pelo ra

app.put('/',(req,res) =>{
    const index = alunos.findIndex(a => a.ra == req.query.ra);
    alunos[index] = {ra: req.query.ra, nome: req.body.nome, turma:req.body.turma, cursos: req.body.cursos}
    res.json(alunos)
})

app.delete('/', (req,res) =>{
  const index = alunos.findIndex(a=> a.ra == req.query.ra);

  if (index === -1){
    return res.status(400).json({erro:"Aluno não encontrado"})
  }
  alunos.splice(index,1);
  res.json(alunos)
})

