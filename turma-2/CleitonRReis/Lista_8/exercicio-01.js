/*
1.(OBRIGATÓRIO) Crie um programa que crie um objeto chamado "xicara" com as propriedades "cheia" 
(booleana) e "cor" (string) e imprima na tela. (Você pode decidir o valor de "cheia" e "cor", não é necessário pedir para o usuário)
*/

const rs = require('readline-sync');

let corDaXicara = rs.question('Informe a cor da sua xícara: ');

let meioCheiaMeiovazia = rs.question('Sua xicara está cheia? S = Sim / N == Não: ')

function xicaraCheia(cheia) {
    if (cheia == 'S') {
        return true;
    } else {
        return false;
    }
}

xicaraCheia();

let xicara = {};

xicara.cor = corDaXicara,
xicara.cheiaOuvazia = xicaraCheia(meioCheiaMeiovazia);

console.log(xicara);