/*Escreva um programa para ler o ano de nascimento de uma pessoa e
escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
necessário considerar o mês em que ela nasceu).*/

let rs = require('readline-sync')
let ano = rs.questionInt('Em qual ano voce nasceu?\n')

ano <= 2004 ? console.log('Você pode votar esse ano!') 
: console.log('Você ainda não pode votar esse ano!')