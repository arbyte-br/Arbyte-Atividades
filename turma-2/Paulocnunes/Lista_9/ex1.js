let median = require('median')
let rs = require('readline-sync')

let numeros = [
    n1 = rs.questionInt('Digite sua primeira nota: \n'),
    n2 = rs.questionInt('Digite sua segunda nota: \n'),
    n3 = rs.questionInt('Digite sua terceira nota: \n'),
    n4 = rs.questionInt('Digite sua quarta nota: \n')
]

let valorMediana = median(numeros)
 
console.log("O valor da mediana é " + valorMediana)