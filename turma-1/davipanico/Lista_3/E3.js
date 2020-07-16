/* Escreva um algoritmo que imprima todos os números ímpares de 1 até 100.*/

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde vamos definir nosso 'Contador', ele será responsável por manter a condição do While.
var contador = 1

// Condição, enquanto (while) a variável 'contador' for menor ou igual (<=) a 100, vamos imprimir a variável 'contador' e, depois incrementar ela com mais 2 (+ 2).
while (contador <= 100) {
    console.log(contador)
    contador = contador + 2
}