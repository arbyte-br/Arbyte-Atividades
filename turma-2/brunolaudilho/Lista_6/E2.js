// ## Importação de bibliotecas ##
let readlineSync = require('readline-sync'); // Biblioteca para recebimento de dados pelo usuário.

// ## Código ##
let player = readlineSync.question('Insira seu Nome: ');
let Nplayer1 = new Array();
for (x = 0; x < 5; x++) {
    Nplayer1.push(readlineSync.questionInt('Insira 5 numeros de 1 a 10: '));
}

let player2 = readlineSync.question('Insira seu Nome: ');
let Nplayer2 = new Array();
for (x = 0; x < 5; x++) {
    Nplayer2.push(readlineSync.questionInt('Insira 5 numeros de 1 a 10: '));
}

