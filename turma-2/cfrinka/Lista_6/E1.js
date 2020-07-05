let rs = require('readline-sync');
let jogador1 = rs.question('Qual o seu nome? Você será o Jogador 1 ')
let jogador2 = rs.question('Qual o seu nome? Você será o jogador 2 ')
let arrayjogador1 = [] ;
let arrayjogador2 = [];
let comum = [];

for (let i = 0; i < 5 ; i++){
    let nA = rs.questionInt(` ${jogador1}, insira um número: `);
    arrayjogador1.push(nA)
}
console.log('=============')

for (let i = 0; i < 5; i++){
    let nB = rs.questionInt(`${jogador2}, insira um número: `);
    arrayjogador2.push(nB)
}
for (let i = 0; i <= 4; i++){
    if (arrayjogador1.indexOf(arrayjogador2[i]) > -1) {
        comum.push(arrayjogador2[i])
                
    }
}
console.log(`Os número em comum são: ${comum}`)