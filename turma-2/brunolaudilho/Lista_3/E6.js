// ## Importação de bibliotecas ##
let readlineSync = require('readline-sync'); //Biblioteca para recebimento de dados pelo usuário.

// ## Código ##
let palavra = readlineSync.question('Insira uma palavra qualquer: ');

while (true){
    console.log(palavra.split('').reverse().join(''));
    break;
}