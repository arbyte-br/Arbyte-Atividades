/* Faça um algoritmo que receba um número e imprima todos seus divisores.
EX : usuário informou 21
O algoritmo imprime :
1
3
7
21
DICA: Você pode precisar usar a operação de módulo (a%b) */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos ao usuário um número.
var numero = readline.questionInt('Insira um número: ')
// Variável onde definimos o nosso contador com o valor de 0.
var contador = 0

// Condição, enquanto (while) a variável 'contador' for menor ou igual (<=) a variável 'numero' faremos o seguinte:
while (contador <= numero) {
    // Condição, se a variável 'numero' módulo (%) a variável 'contador' for igual (==) a 0, imprimimos a variável contador, pois ela é um divisor da variável 'numero'
    if ( numero % contador == 0) {
        console.log(contador)
    }
    // Caso não, apenas incrementamos o contador com + 1
    contador++
}