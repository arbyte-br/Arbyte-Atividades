// (OBRIGATÓRIO) ​ Faça uma programa que receba 4 notas e calcule a mediana e
// apresente ao usuário o resultado.
// Utilize o pacote : ​ https://www.npmjs.com/package/median

let median = require('median')
let rs = require('readline-sync')

let nota1 = rs.questionInt('Digite uma nota: ')
let nota2 = rs.questionInt('Digite uma nota: ')
let nota3 = rs.questionInt('Digite uma nota: ')
let nota4 = rs.questionInt('Digite uma nota: ')

let notas = [nota1, nota2 ,nota3, nota4]

let mediaNota = median(notas)

console.log(`A média das notas é: ${mediaNota}`)