// Faça um programa que receba um nome e imprima a terceira letra do
// nome.
// Utilize o método charAt() para esta atividade.

let rs = require('readline-sync');

let nome = rs.question('Insira um nome: ');
console.log(`A terceira letra é ${nome.charAt(2)}`);