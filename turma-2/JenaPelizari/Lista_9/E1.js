/** Faça uma programa que receba 4 notas e calcule a mediana e
apresente ao usuário o resultado. */

let rs = require('readline-sync')
let median = require('median')

let listNotas = []

let nota1 = rs.questionInt('Digite a primeira nota: ')
let nota2 = rs.questionInt('Digite a segunda nota: ')
let nota3 = rs.questionInt('Digite a tercceira nota:')
let nota4 = rs.questionInt('Digite a quarta nota:')

listNotas.push(nota1, nota2, nota3, nota4)

let media = median(listNotas)

console.log('A media total é ' + media)