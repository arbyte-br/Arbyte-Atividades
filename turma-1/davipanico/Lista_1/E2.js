/* (OBRIGATÓRIO) Faça um programa que receba um número do usuário e verifique se
este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR” */

// variável para chamar o 'Readline-sync'
var readline = require('readline-sync')

// Ponto importante, nesse caso usamos o 'readline.questionInt', diferente do 'question'
// o 'questionInt' vai aceitar apenas valores inteiros.
// Você pode ver mais informações sobre o readline na documentação dele.
// Variável para pedir um número ao usuário
var numero = readline.questionInt('Por favor, insira um número ')

// Condição, se a variável 'numero' módulo 2 ( % módulo = resto da divisão) for 0, significa que esse número é par
// então o vamos para a mensagem 'Esse número é par', caso contrário vamos para o else 'Esse número é impar'
if (numero %2 == 0) {
    console.log('Esse número é par')
} else {
    console.log('Esse número é impar')
}