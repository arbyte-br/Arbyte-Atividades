let rs = require('readline-sync');

let frase = rs.question('Escreva qualquer coisa, para transformar em maiusculas: ');

console.log(frase.toLocaleUpperCase());