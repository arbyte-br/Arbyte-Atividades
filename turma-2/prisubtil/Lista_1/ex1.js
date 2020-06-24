/*(OBRIGATÓRIO)  Escreva um programa para ler o ano de nascimento de uma pessoa e
escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
necessário considerar o mês em que ela nasceu).*/

let readlineSync = require('readline-sync');
let ano = readlineSync.questionInt('Digite seu ano de nascimento: ')

if(ano <= 2002){
    console.log('Voce pode votar neste ano.');
}else{
    console.log('Voce nao pode votar neste ano.');
}