let rs = require ('readline-sync')

console.log('Olá, usuário!')

console.log('Digite um número inteiro')
let valor1 = rs.questionInt("")

console.log('Digite outro número inteiro')
let valor2 = rs.questionInt("")

let contador = 0
let resultado = 0

while(contador !== valor2) {
    resultado = resultado + valor1
    contador = contador + 1
}

console.log('O resultado é: ' + resultado)