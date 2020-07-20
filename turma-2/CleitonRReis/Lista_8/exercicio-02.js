/*
2.(OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício 
anterior porém pergunte para o usuário se a xícara está cheia ou não.
*/

const rs = require('readline-sync');

let corDaXicara = rs.question('Informe a cor da xícara: ');

let xicaraCheiaOuVazia = rs.question('A sua xícara está cheia? Sim ou Não: ');

let xicara = {
    corDaXicara,
    xicaraCheiaOuVazia
};

if (xicaraCheiaOuVazia == 'Sim') {
console.log(`A cor da xícara é: ${xicara.corDaXicara}. ${xicara.xicaraCheiaOuVazia}, a xícara está cheia.`);
} else {
    console.log(`A cor da xícara é: ${xicara.corDaXicara}. ${xicara.xicaraCheiaOuVazia}, a xícara não está cheia.`);
}