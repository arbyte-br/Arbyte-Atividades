/* Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM
usar o operador de multiplicação (*) */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync');

// Variável onde vamos pedir o primeiro número ao usuário.
var numero1 = readline.questionInt("Qual o primeiro numero? ");
// Variável onde vamos pedir o segundo número ao usuário.
var numero2 = readline.questionInt("Qual o segundo numero? ");
// Variável onde vamos armazenar o resultado da multiplicação.
var resultado = 0;

// Condição, enquanto (while) a variável 'numero2' for maior (>) que 0, atrelamos a variável 'resultado' a soma da variável 'resultado' e 'numero1'.
// Por último removemos (--) 1 da variável 'numero2' e quando o loop se encerrar iremos imprimir 'O resultado é' e, a variável 'resultado'.
while(numero2 > 0){
   resultado = resultado + numero1;
   numero2--;
}
console.log("O resultado é ", resultado);