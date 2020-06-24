let rs = require('readline-sync')

let valor1 = rs.questionInt('Digite um número para multiplicar: ')

let valor2 = rs.questionInt('Digite outro número: ')

let resultado = 0
let contador = 0

if (valor1 <=0 || valor2 <= 0) {
    console.log('O número não pode ser 0 ou menos que 0.')
} else {
    while(contador < valor1  ) {
        resultado = valor2 + resultado
        contador++
    }
    console.log(resultado)
}    