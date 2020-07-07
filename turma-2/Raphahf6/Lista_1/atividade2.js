//(OBRIGATÓRIO) Faça um programa que receba um número do usuário e verifique se
//este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR”

let rs = require('readline-sync')

let number = rs.questionInt('Digite um numero para verificar se é par ou impar: ')

if (number % 2 === 0){
    console.log('O numero é par')
}else{
    console.log('O numero é impar')
}