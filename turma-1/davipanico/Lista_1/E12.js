/* Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B. */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Aqui pedimos ao usuário o número 1 e o número 2 que iremos armazenar nas variáveis 'numero1' e 'numero2'
var numero1 = readline.questionInt('Qual o primeiro número? ')
var numero2 = readline.questionInt('Qual o segundo número? ')

// Condição, se a variável 'numero1' módulo (%) 'numero2' o resto for 0, isso significa que o número 1 é divisível pelo número2.
// Então iremos imprimir 'O número 1 é divisível pelo número 2'.
if (numero1 %numero2 == 0) {
    console.log('O número 1 é divisível pelo número 2!')
}
// Caso a primeira condição não seja atendida, iremos para o else e imprimir: 'O número 1 não é divisível pelo número 2!'
else {
    console.log('O número 1 não é divisível pelo número 2!')
}