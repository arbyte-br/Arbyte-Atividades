let readline = require('readline-sync');

let palavra = readline.question('Digite qualquer palavra: ');

palavra = palavra.split('').reverse().join('');

console.log(palavra);