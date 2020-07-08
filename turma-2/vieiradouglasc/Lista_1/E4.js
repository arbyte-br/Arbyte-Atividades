// (OBRIGATÓRIO)​ As maçãs custam R$ 0,30 cada se forem compradas menos do que
// 12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
// de maçãs compradas, calcule e escreva o valor total da compra

let realineSync = require('readline-sync');
let quant = realineSync.questionInt('Insira a quantidade de maçãs: ');
let valor

if(quant <= 12) {
    console.log('Você comprou ' + quant + ' maçãs, o valor é R$ ' + (quant * 0.3).toFixed(2));
} else {
    console.log('Você comprou ' + quant + ' maçãs, o valor é R$ ' + (quant * 0.25).toFixed(2));
}