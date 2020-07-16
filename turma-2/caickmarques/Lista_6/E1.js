let readline = require('readline-sync');

let nome1 = readline.question('Insira o nome do jogador 1: ');
let nome2 = readline.question('Insira o nome do jogador 2: ');

let numero_jogador1 = [];
let numero_jogador2 = [];
for (let i = 0; i < 5; i++) {
    numero_jogador1.push(readline.questionInt(`Informe um numero para o jogador ${nome1}: `));
}
for (let i = 0; i < 5; i++) {
    numero_jogador2.push(readline.questionInt(`Informe um numero para o jogador ${nome2}: `));
}

let contador = 0;
let finalLoop = numero_jogador1.length;
let resultado = [];

for (contador; contador < finalLoop; contador++) {
    let comparador = numero_jogador1[contador];
    let containNum = numero_jogador2.indexOf(comparador) > -1;

    if (containNum) {
        resultado.push(comparador);
    }
}

console.log(resultado);