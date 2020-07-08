// (OBRIGATÓRIO) ​ Faça um programa que receba um número do usuário e verifique se
// este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR”

let readlineSync = require('readline-sync');
let num = readlineSync.questionInt('Insira um número qualquer: ');

if(num % 2 === 0){
    console.log('Esse número é par.');
} else {
    console.log('Esse número é impar.');
}