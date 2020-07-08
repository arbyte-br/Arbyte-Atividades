// Escreva um programa que calcule a soma de todos os múltiplos de 3
// e de 5 entre 1 e 1000.

let rs = require('readline-sync');
let contador = 1
let soma = 0

while (contador <= 1000) {
    if ((contador%3 === 0) && (contador%5 === 0)) {
        soma += contador
        console.log('Divisor: ', contador)
    }
    contador++
}
console.log(soma)
