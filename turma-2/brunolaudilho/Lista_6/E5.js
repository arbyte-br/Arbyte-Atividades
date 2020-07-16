let readline = require('readline-sync');

let palavra = readline.question('Digite uma palavra qualquer: ');

console.log(`A terceira letra dessa palavra é: ${palavra.charAt(2)}`);

