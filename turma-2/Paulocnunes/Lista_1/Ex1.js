//Escreva um programa para ler o ano de nascimento de uma pessoa e
//escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
//necessário considerar o mês em que ela nasceu).

let rs = require('readline-sync')

let anoNascimento = rs.questionInt('Digite o ano do seu nascimento: ')

if (anoNascimento > 2002 ) {
    console.log('Você ainda não poderá votar nas eleições desse ano.')
}   
    else {
    console.log('Legal! Você já pode votar nas próximas eleições.')
    }