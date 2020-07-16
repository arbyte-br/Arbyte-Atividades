let rs = require('readline-sync');

let nomeJogador1 = rs.question('Digite o nome do jogador 1: ')
let nomeJogador2 = rs.question('Digite o nome do jogador 2: ')
console.clear()
let listaJogador1 = []
let listaJogador2 = []
let diferente = []
let resultado = []

for (let i = 0; i < 5; i++) {
    let np1 = rs.questionInt(`Insira um numeros entre 0 e 10, ${nomeJogador1}: `);;
    listaJogador1.push(np1)
}
console.clear()

for (let i = 0; i < 5; i++) {
    let np2 = rs.questionInt(`Insira um numeros entre 0 e 10, ${nomeJogador2}: `);
    listaJogador2.push(np2)
}
console.clear()

for (let x = 0; x < 5; x++) {
    let achou = false;
    for (let y = 0; y < 5; y++) {
        if (listaJogador1[x] === listaJogador2[y]) {
            resultado.push(listaJogador1[x]);
            achou = true;
            break;
        }
    }
    if (achou === false) {
        diferente.push(listaJogador1[x]);
    }
}

console.log(`Os números diferentes são: ${diferente}`);