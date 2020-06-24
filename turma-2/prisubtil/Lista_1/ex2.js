/* (OBRIGATÓRIO) Faça um programa que receba um número do usuário e verifique se
este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR”*/

let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('Digite um numero: ')

if(numero%2 ==0){
    console.log(`${numero} é um numero PAR`);
}else{
    console.log(`${numero} é um numero IMPAR`);
}