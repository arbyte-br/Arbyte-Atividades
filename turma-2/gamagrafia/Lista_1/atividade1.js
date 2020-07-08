//Escreva um programa para ler o ano de nascimento de uma pessoa
// Escreva uma mensagem dizendo se poderá ou não votar esse ano (maiores de 16)

let rs=require('readline-sync')

let ano=rs.questionInt('Qual seu ano de nascimento?')

if(ano<2004) {
    console.log (`Você Nasceu em ${ano} e já pode votar`)
} else{
    console.log (`Você Nasceu em ${ano} e não pode votar`)
}