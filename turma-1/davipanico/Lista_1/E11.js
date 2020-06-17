/* Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja
negativo, imprimindo o resultado. */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Aqui solicitamos ao usuário um número ao usuário e armazenamos na variável 'numero'.
var numero = readline.questionInt('Qual seu número?: ')

// Condição, se a variável 'numero' for maior ou igual (>=) a 0, iremos fazer o cálculo do número dobrado, pois o número maior que 0 é positivo.
// Vamos imprimir: 'Seu número dobrado é: ' e, aqui calculamos a variável 'numero' vezes (*) 2.
if (numero >= 0) {
    console.log('Seu número dobrado é: ', numero * 2 )
}
// Caso a primeira condição não seja atendida, automaticamente sabemos que o número é negativo, então vamos para o else.
// Vamos imprimir: 'Seu número triplicado é: ' e, aqui calculamos a variável 'numero' vezes (*) 3.
else {
    console.log('Seu numero triplicado é: ', numero * 3)
}