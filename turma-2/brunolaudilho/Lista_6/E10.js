let readline = require('readline-sync');

let palavra = readline.question('Digite uma palavra ');
let cont = 0;

for (cont; cont < palavra.length; cont++) {

    console.log(palavra.charAt(cont).toUpperCase());
}