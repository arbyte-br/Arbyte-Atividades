// Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário se a xícara está cheia ou não.

let readlineSync = require('readline-sync');

let conteudo = readlineSync.question('Insira se a xícara está cheia? (Sim ou Não): ');
let cor = readlineSync.question('Insira a cor da xícara: ')

let xicara = {
    cheia: conteudo, 
    cor: cor
}

console.log(xicara)
