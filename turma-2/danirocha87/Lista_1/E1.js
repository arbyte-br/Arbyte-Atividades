//Escreva um programa para ler o ano de nascimento de uma pessoa e
//escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
//necessário considerar o mês em que ela nasceu).

let rs = require("readline-sync")

let anoatual = rs. question("Qual ano atual?")

let anodenascimentos = rs.question("Em que ano voce nasce?    ")

let  idade = anoatual - anodenascimentos

if(idade <16){
    console.log("Você pode votar mas não é obrigatorio!")
}else if(idade < 65){
    console.log("Você é obrigado a votar!")
}else if(idade > 65){
    console.log("Você não é obrigado a votar, mas pode tbm!")
}