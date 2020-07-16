// Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.

let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt('Insira o primeiro número: ');
let num2 = readlineSync.questionInt('Insira o segundo número: ');

if (num1 % num2 === 0) {
    console.log('O ' + num1 + ' é divisível por ' + num2);
} else {
    console.log('O ' + num1 + ' não é divisível por ' + num2);    
}
