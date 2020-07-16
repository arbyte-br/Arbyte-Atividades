let rs = require('readline-sync')

let nota1 = rs.questionFloat('Digite a primeira nota: \n')
let nota2 = rs.questionFloat('Digite a segunda nota: \n')
let nota3 = rs.questionFloat('Digite a terceira nota: \n')
let media = (nota1 + nota2 + nota3)/3

if(media >= 7){
    console.log('ALUNO APROVADO, com media: ' + media)
} else if(media < 6.9) {
    console.log('ALUNO REPROVADO, com media:  ' + media)
}