let rs = require("readline-sync")

let nome = rs.question('Qual o nome do aluno? ')
let nota = rs.questionFloat('Qual a nota do aluno? ')

if (nota >= 7) {
    console.log(`O aluno ${nome} foi aprovado.`)
}else {
    console.log(`O aluno ${nome} foi reprovado.`)
}