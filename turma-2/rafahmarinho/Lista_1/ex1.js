//(OBRIGATÓRIO) Escreva um programa para ler o ano de nascimento de uma pessoa e
// escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
//     necessário considerar o mês em que ela nasceu).
let rs = require ('readline-sync')

console.log('Saiba se você pode votar este ano!')
let anoNascimento = rs.questionInt('Qual o seu ano de nascimento? (Informe em 4 digítos, ex:1996) \n')

let idade = 2020 - anoNascimento

if ((idade >= 16 && idade < 18) || idade >= 70){
    console.log('Você pode votar este ano, mas não é obrigatório!')
} else if (idade >= 18  && idade < 70){
    console.log ('Seu voto é obrigatório este ano!')
}else {
    console.log('Você ainda não possui idade para votar este ano.')
}