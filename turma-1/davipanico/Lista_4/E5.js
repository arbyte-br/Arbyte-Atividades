/* Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima
o maior e o menor, sem levar em consideração o -1 */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos ao usuário um número.
var numero = readline.questionInt('Insira um número: ')
// Variável onde iremos armazenar o maior número que o usuário inserir.
var maior = numero
// Variável onde iremos armazenar o menor número que o usuário inserir.
var menor = numero

// Condição, enquanto (while) a variável 'numero' for diferente (!=) de -1, então:
while (numero != -1 ) {
    // Condição, se (IF) a variável 'numero' for maior ou igual (>=) a variável 'maior', então:
    if(numero >= maior) {
        // Armazenamos o valor da variável 'numero' dentro da variável 'maior', pois sabemos que o valor que o usuário inseriu é maior.
        maior = numero
    } 
    // Condição, se a variável 'numero' for menor ou igual (<=) a variável 'menor', então:
    else if(numero <= menor) {
        // Armazenamos o valor da váriavel 'numero' na variável 'menor'.
        menor = numero
    }
    // Por fim pedimos ao usuário para inserir um número.
    var numero = readline.questionInt('Insira um número: ')
}

// Caso ele insira -1 ele irá sair do loop e vamos imprimir as variáveis 'maior' e 'menor'.
console.log(maior, menor)