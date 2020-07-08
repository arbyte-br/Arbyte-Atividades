/** Faça um programa que receba um número do usuário e verifique se
este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR” */

let rs = require('readline-sync')

let numUsuario = rs.questionInt('Digite um número\n')

if (numUsuario % 2 === 0){
console.log("É um número par!");
}
else{
    console.log("É um número impar!");
}