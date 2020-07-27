let rs = require('readline-sync')
const {media,cadastrarAlunos, calculaMediaIdadeAluno}  = require('./calcula-media')

let qtd = rs.questionInt('Quantos alunos deseja cadastrar ?  \n')

let alunos = cadastrarAlunos(qtd)

console.log("A média de idade dos alunos é : ", calculaMediaIdadeAluno(alunos).toFixed(2))
