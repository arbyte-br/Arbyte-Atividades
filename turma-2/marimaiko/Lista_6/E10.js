// Faça um algoritmo que receba um texto e imprima ele em letras
// maisuculas.
// Utilize o método toUpperCase()

let rs = require('readline-sync');

let text = rs.question('Insira um texto: ');
let result = text.toUpperCase();
console.log(result);