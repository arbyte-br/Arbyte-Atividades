let rs = require('readline-sync')

let primeiroNumero = rs.questionFloat('Digite um número: ') // 3

let segundoNumero = rs.questionInt('Digite outro número: ') // 2

let contador = 0

let resultado = 0

for (let i = 0; i < segundoNumero; resultado = resultado + primeiroNumero + i++)

console.log("O resultado da multiplicação é: " + resultado)