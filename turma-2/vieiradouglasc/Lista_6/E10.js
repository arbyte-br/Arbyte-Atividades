let readlineSync = require('readline-sync');

let palavra = readlineSync.question('Escreva uma palavra em letras mínusculas: ');
console.log(palavra.toUpperCase(palavra))