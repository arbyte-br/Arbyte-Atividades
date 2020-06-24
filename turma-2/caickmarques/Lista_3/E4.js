let readline = require('readline-sync');

let numero = readline.questionInt('Digite um numero: ');

for (let i = 0; i <= numero; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}