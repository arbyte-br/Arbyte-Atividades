let rs = require('readline-sync')

console.log('Vou calcular a potenciação de um número')
let base = rs.questionInt('Digite a base: \n')
let expoente = rs.questionInt('Digite o expoente: \n')
let i = 0
let resultado = 0

while(i !== expoente) {
    resultado = resultado + base
    i++
}

console.log("O resultado é " + resultado);
