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

 app.post('/', (req, res) => {
    const ra = req.query.ra
    const {nome, turma, cursos} = req.body
    alunos.push({ra:ra, nome:nome, turma:turma, cursos:cursos})
    res.send(alunos)
})

