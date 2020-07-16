let rs = require('readline-sync')

let valor1 = rs.questionInt('Digite um número para multiplicar: ')

let valor2 = rs.questionInt('Digite outro número: ')

let resultado = 0

for(let contador = 0; contador < valor2; contador++) {
    resultado = resultado + valor1
}
console.log(resultado)