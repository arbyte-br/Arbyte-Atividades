/*
14.
Faça um algoritmo que receba um texto e imprima ele em letra minúscula novamente.
Utilize o método ​toLowerCase()
*/

const rs = require('readline-sync');

let palavraOuFrase = rs.question('Por favor, informe uma palavra ou frase: ').toLocaleLowerCase();

console.log(`Tudo em minúsculo fica assim: ${palavraOuFrase}.`);