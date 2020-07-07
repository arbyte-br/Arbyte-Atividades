/*Faça um programa que receba um número do usuário e verifique se
este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR”*/

let rs = require('readline-sync')
let numero = rs.questionInt('Digite um numero: ')

numero%2 !== 0 ? console.log('Esse numero é ÍMPAR') 
: console.log('Esse numero é PAR')