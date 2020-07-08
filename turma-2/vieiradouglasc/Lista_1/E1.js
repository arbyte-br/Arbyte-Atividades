// //(OBRIGATÓRIO) ​ Escreva um programa para ler o ano de nascimento de uma pessoa e 
// escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
// necessário considerar o mês em que ela nasceu).

let readlineSync = require('readline-sync');
let anoAtual = readlineSync.questionInt('Insira o ano atual: ');
let anoNasc = readlineSync.questionInt('Insira o ano de nascimento: ');
let eleitor = anoAtual - anoNasc;


if(eleitor >= 16) {
    console.log('Você pode votar.');
} else {
    console.log('Você não pode votar.');
}