/* Fazer um programa para receber um número e verificar se está entre 100 e 200.
Se estiver na faixa, imprimir:
Você digitou um numero entre 100 e 200.
Senão estiver na faixa, imprimir
Você digitou um numero fora da faixa entre 100 e 200. */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos um número ao usuário.
var numero = readline.questionInt('Qual seu número?')

// Condição, se a variável 'numero' for maior ou igual (>=) a 100 e (&&) menor ou igual (<=) a 200, iremos imprimir:
// 'Você digitou um número entre 100 e 200'.
// Caso a condição não seja atendida, iremos para o else.
if (numero >= 100 && numero <= 200) {
    console.log('Você digitou um numero entre 100 e 200.')
}
// Aqui já sabemos que o número digitado não está entre 100 e 200, então iremos imprimir:
// 'Você digitou um número fora da faixa entre 100 e 200'.
else {
    console.log('Você digitou um numero fora da faixa entre 100 e 200.')
}