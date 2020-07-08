// Escreva um programa para ler o ano de nascimento de uma pessoa e
// escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
// necessário considerar o mês em que ela nasceu).

let rs = require('readline-sync')

let anoNascimento = rs.questionInt('Digite o ano do seu nascimento: ')

if (anoNascimento < 2004) {
    console.log("Você está apto a votar!")
} else {
    console.log("Você não está apto a votar!")
}