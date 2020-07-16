let readline = require('readline-sync');

let palavra = readline.question('Digite uma fase que contenha a palavra *bosta*: ');


let contemBosta = palavra.replace('bosta', 'estrume');

console.log(contemBosta);

