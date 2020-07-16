/*  (OBRIGATÓRIO) ​Faça um algoritmo que receba um número e diga se ele é primo ou não Utilize o pacote
 : ​https://www.npmjs.com/package/prime-number 
*/

// Primeiro vamos instalar o módulo 'prime-number' usando o comando npm install prime-number.

// Variável onde chamamos o módulo 'prime-number'.
var isPrime = require('prime-number')
// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde pedimos para o usuário inserir um número.
var numero = readline.questionInt('Insira um numero ')

// Por fim imprimimos a função 'isPrime' que recebe como parâmetro a variável 'numero'.
console.log(isPrime(numero))
// A função retorna true para número primo e false para número não primo.