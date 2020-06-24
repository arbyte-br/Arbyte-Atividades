let readlineSync = require('readline-sync');
let palavra = readlineSync.question('Insira uma palavra qualquer: ');
while (true){
    console.log(palavra.split('').reverse().join(''));
    break;
}