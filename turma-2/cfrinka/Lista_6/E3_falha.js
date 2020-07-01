let rs = require('readline-sync');


let jogador1 = rs.question('Digite seu nome: ');
let jogador2 = rs.question('Digite seu nome: ');
let n1 = rs.questionInt(`${jogador1} digite um número de 1 a 10: `);
let n2 = rs.questionInt(`${jogador1} digite um número de 1 a 10: `);
let n3 = rs.questionInt(`${jogador1} digite um número de 1 a 10: `);
let n4 = rs.questionInt(`${jogador1} digite um número de 1 a 10: `);
let n5 = rs.questionInt(`${jogador1} digite um número de 1 a 10: `);
let n6 = rs.questionInt(`${jogador2} digite um número de 1 a 10: `);
let n7 = rs.questionInt(`${jogador2} digite um número de 1 a 10: `);
let n8 = rs.questionInt(`${jogador2} digite um número de 1 a 10: `);
let n9 = rs.questionInt(`${jogador2} digite um número de 1 a 10: `);
let n10 = rs.questionInt(`${jogador2} digite um número de 1 a 10: `);
let arrayjogador1 = [n1,n2,n3,n4,n5];
let arrayjogador2 = [n6,n7,n8,n9,n10];
let juntos = [];

for (let i = 0; i <= 4; i++){
    for (let i2 = 0; i2 <=4; i2++){
        if (arrayjogador1[i] == arrayjogador2[i2]) {
        juntos.push(arrayjogador2[i])
        }
    }
}
console.log(`Os números em comum são: ${juntos}`)

// mostrando numero sem sentido
   