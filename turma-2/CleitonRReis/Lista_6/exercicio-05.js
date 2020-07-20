/*
9. Faça um programa que receba um nome e imprima a terceira letra do nome.
Utilize o método charAt() para esta atividade.
*/

const rs = require('readline-sync');

var nome = rs.question('Informe seu nome: ');

var guardaNome = nome.charAt(2);;

console.log(guardaNome);

// guardaNome.push(nome);