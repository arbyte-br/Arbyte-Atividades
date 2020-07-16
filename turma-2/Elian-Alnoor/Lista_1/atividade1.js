// Escreva um programa para ler o ano de nascimento de uma pessoa e 
// escrever uma mensagem que diga se ela poderá ou não votar este ano (não é 
// necessário considerar o mês em que ela nasceu). 

let rs = require("readline-sync")

let ano = rs.question("digite o seu ano de nascimento:\n")

if (ano <= 2002){
    console.log("Se prepare para paticipar na eleição!")
} else {
    console.log("Não precisará passar raiva este ano!")
}