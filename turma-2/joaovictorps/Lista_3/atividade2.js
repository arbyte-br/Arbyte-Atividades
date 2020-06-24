let rs = require('readline-sync')

let valor1 = rs.questionInt('Digite um número para multiplicar: ')

let valor2 = rs.questionInt('Digite outro número: ')

let resultado = 0
let contador = 0

while(contador < valor2  ) {
    resultado = valor1 + resultado
    contador++
}
console.log(resultado)
   