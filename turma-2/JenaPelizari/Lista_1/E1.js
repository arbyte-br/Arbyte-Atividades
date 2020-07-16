/** Escreva um programa para ler o ano de nascimento de uma pessoa e
escrever uma mensagem que diga se ela poderá ou não votar este ano 
(não é necessário considerar o mês em que ela nasceu)  **/

let rs = require('readline-sync')

let anoDenascimento = rs.questionInt('Digite o ano de nascimento\n')
let anoAtual = rs.questionInt('Digite o ano atual\n')

let anoMaior
let anoMenor

if (anoDenascimento-anoAtual <= 18)
{
console.log("Você pode votar!");
}
if (anoDenascimento-anoAtual >= 18)
{
console.log("Você não pode votar!");
}