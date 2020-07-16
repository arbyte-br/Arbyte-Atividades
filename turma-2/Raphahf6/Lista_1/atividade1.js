//(OBRIGATÓRIO) Escreva um programa para ler o ano de nascimento de uma pessoa e
//escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
//necessário considerar o mês em que ela nasceu).

let anoDeNascimento = 2010
let anoAtual = 2020


if(anoAtual - anoDeNascimento >= 18){
    console.log(`Você ja pode votar`)
} else{
    console.log(`Você ainda não pode votar`)
}