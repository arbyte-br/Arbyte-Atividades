let rs = require('readline-sync');

let jogadorA = rs.question('nome do primeiro jogador ');
let jogadorB = rs.question('nome do segundo jogador ');


let numJogadorA = [];
let numJogadorB = [];
cont = 5;



for (i = 0; i < cont; i++) {
    numJogadorA[i] = rs.question(`${jogadorA} digite 5 numeros `);

}

console.log(numJogadorA)

for (i = 0; i < cont; i++) {
    numJogadorB[i] = rs.question(`${jogadorB} digite 5 numeros `);

}

console.log(numJogadorB)

console.log(`${numJogadorA}, ${numJogadorB}`);

