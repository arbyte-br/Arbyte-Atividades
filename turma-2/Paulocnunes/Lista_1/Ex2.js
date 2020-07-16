//Faça um programa que receba um número do usuário e verifique se
//este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR”

let rs = require('readline-sync')

let numeroUsuario = rs.questionInt('Digite um número: ')

if (numeroUsuario % 2 !== 0) {
    console.log('Esse número é IMPAR.')
}   else {
    console.log('Esse número é PAR!')
}