// ## Importação de bibliotecas ##
let readlineSync = require('readline-sync'); // Biblioteca para recebimento de dados pelo usuário.

// ## Código ##
let Nplayer1 = new Array();
let Nplayer2 = new Array();
let final = new Array();
let x = 0;
let y = 0;
let w = 0;

let player = readlineSync.question('Insira o nome do Player1 ');
for (x; x < 5; x++) {
    Nplayer1.push(readlineSync.questionInt('Insira 5 numeros de 1 a 10: '));
}

let player2 = readlineSync.question('Insira o nome do PLayer2 ');
for (y; y < 5; y++) {
    Nplayer2.push(readlineSync.questionInt('Insira 5 numeros de 1 a 10: '));
}


for (w; w < 5; w++); {
    let result = Nplayer2.indexOf(Nplayer1[w]) > -1;
    if (result) {
        final.push(Nplayer1[w]);
    }
}console.log(final);




