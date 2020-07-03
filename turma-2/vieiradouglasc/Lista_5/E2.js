// (OBRIGATÓRIO)​ Faça um programa que leia dois números, o primeiro é o valor inicial
// de um contador, e o segundo é o valor final do contador (verifique se o valor inicial
// fornecido é inferior ao
// valor final). Usando o comando For, escreva na tela uma contagem que comece no
// primeiro número lido, escreva os números seguintes colocando apenas um número em
// cada nova linha da tela, até chegar ao valor final indicado.

let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt('Insira um número: ')
let num2 = readlineSync.questionInt('Insira um número maior que o número anterior: ')
if (num1 <= num2) {
    for(num1; num1 <= num2; num1++) {
        console.log(num1)
    }
 } else {
        for (num2; num2 <= num1; num2++)
        console.log(num2)  
    }
