let rs = require('readline-sync');

let nomeJogador1 = rs.question('Digite o nome do jogador 1: ')
let nomeJogador2 = rs.question('Digite o nome do jogador 2: ')
console.clear()
let listaJogador1 = []
let listaJogador2 = []
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
    if (!resultado.includes(listaJogador1[x])) resultado.push(listaJogador1[x]);
    if (!resultado.includes(listaJogador2[x])) resultado.push(listaJogador2[x]);
}

console.log(`Os números são: ${resultado.sort()}`);