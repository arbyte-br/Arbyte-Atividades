// (OBRIGATÓRIO) ​Faça um programa que recebe um número e imprima 
// todos os números pares de 0 até o número inserido.

let rs = require('readline-sync')
let contador = 0
let limite = rs.questionInt("Digite um número: ")
while (contador <= limite) {
    if (contador % 2 === 0) {
        console.log(contador)
    }
    contador++
}