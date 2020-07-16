/*  (OBRIGATÓRIO) ​Faça um algoritmo que receba um número e diga se ele é par ou ímpar Utilize o pacote :
  ​https://www.npmjs.com/package/is-odd 
*/

// Primeiro vamos instalar o módulo 'is-odd' com o comando npm install is-odd

// Variável onde chamamos o módulo 'is-odd'.
var isOdd = require('is-odd');
// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde pedimos para o usuário inserir um número.
var numero = readline.questionInt('Insira um número ')

// Por fim basta imprimir a função 'isOdd' que recebe como parâmetro a variável 'numero'.
console.log(isOdd(numero))
// A função retorna true para ímpar e false para par.