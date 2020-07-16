// (OBRIGATÓRIO) Escreva um programa para ler o ano de nascimento de uma pessoa e
// escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
// necessário considerar o mês em que ela nasceu).

let rs = require('readline-sync')
let anoDeNascimento = rs.questionInt('Digite o ano de nascimento \n')
let ano = 2020 

if(ano - anoDeNascimento >= 16){
    console.log('Você já pode votar esse ano')
}else{
    console.log('Você ainda não pode votar')

}
