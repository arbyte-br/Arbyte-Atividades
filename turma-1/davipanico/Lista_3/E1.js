/* Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP”
de acordo com o número inserido.
EX: usuário inseriu 3
O programa imprime:
BIP BIP
BIP BIP
BIP BIP */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos ao usuário um número.
var numero = readline.questionInt('Qual o número? ')

// Condição, enquanto (while) a variável 'numero' for maior (>) que 0, iremos imprimir 'BIP BIP' e, por último remover 1 da variável número.
while (numero > 0) {
    console.log('BIP BIP')
    numero--
}