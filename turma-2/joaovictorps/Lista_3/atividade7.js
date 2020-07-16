let rs = require('readline-sync')

let valor1 = rs.questionInt('Digite um número: ')

let valor2 = rs.questionInt('Digite outro número: ')

let resultado = valor1 ** valor2

console.log('O resultado da potenciação é de', valor1 ,'e', valor2 ,'é',resultado)