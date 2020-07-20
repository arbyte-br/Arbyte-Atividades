/*
15.
Faça um algoritmo que receba um texto e remova todos os 
espaços em brancos nocomeço e no final do textoUtilize o método ​trim().
*/

const rs = require('readline-sync');

let fraseOuPalavra = rs.question('Informe uma frase ou palavra: ');

let res = fraseOuPalavra.trim();

console.log(res);