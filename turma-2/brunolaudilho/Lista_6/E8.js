
let readline = require('readline-sync');

let palavra = readline.question("Digite aqui uma palavra: \n");

let contemVogal = palavra.indexOf('a', 'e', 'i', 'o', 'u') !== -1;

if (contemVogal == true) {
    console.log('Contem vogais na palavra');
}

else console.log('Nao contem vogais na palavra');


