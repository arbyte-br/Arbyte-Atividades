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
let juntos = [];

for (contador = 0; contador < finalLoop; contador++) {
    let condicao1 = juntos.includes(numero_jogador1[contador]);
    if (condicao1 === false) {
        juntos.push(numero_jogador1[contador]);
    }
    let condicao2 = juntos.includes(numero_jogador2[contador]);
    if (condicao2 === false) {
        juntos.push(numero_jogador2[contador]);
    }
}

console.log(juntos.sort());