/* Faça um programa que recebe um número e imprima todos os números pares de 0 até
o número inserido.
Ex: usuário inseriu 8
O programa imprime
0
2
4
6
8 */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos ao usuário um número.
var numero = readline.questionInt('Qual o número? ')

// Variável onde definimos o número incial para verificação se é par.
var resultado = 1

// Condição, enquanto (while) a variável 'numero' for maior (>) que 0, vamos fazer outra validação com o IF:
// Condição, se (IF) a variável 'resultado' módulo (%) 2 for igual (==) a 0, vamos imprimir a variável 'resultado' no console e,
// Por último incrementamos 1 na variável 'resultado' e removemos 1 da variável 'numero', se a condinção de IF não for atendida, apenas iremos incrementar e remover.
while (numero > 0) {
    if (resultado % 2 == 0 ) {
        console.log(resultado)
    }
    resultado++
    numero--
}