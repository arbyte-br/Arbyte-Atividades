/*
10.(OBRIGATÓRIO) ​Faça um algoritmo que receba um texto e imprima ele em letrasmaisuculas.
Utilize o método ​toUpperCase()
*/

const rs = require('readline-sync');

var frase = rs.question('Por favor, insira uma frase ou palavra: ').toUpperCase();

console.log(frase);