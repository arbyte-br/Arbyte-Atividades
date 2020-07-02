let rs = require('readline-sync');


let jogador1 = rs.question('Digite seu nome: ');
let n1 = rs.questionInt('Digite um número de 1 a 10: ');
let n2 = rs.questionInt('Digite outro número de 1 a 10: ');
let n3 = rs.questionInt('Digite outro número de 1 a 10: ');
let n4 = rs.questionInt('Digite outro número de 1 a 10: ');
let n5 = rs.questionInt('Digite outro número de 1 a 10: ');
let arrayjogador1 = [n1,n2,n3,n4,n5];
let jogador2 = rs.question('Digite seu nome: ');
let n6 = rs.questionInt('Digite um número de 1 a 10: ');
let n7 = rs.questionInt('Digite outro número de 1 a 10: ');
let n8 = rs.questionInt('Digite outro número de 1 a 10: ');
let n9 = rs.questionInt('Digite outro número de 1 a 10: ');
let n10 = rs.questionInt('Digite outro número de 1 a 10: ');
let arrayjogador2 = [n6,n7,n8,n9,n10];
let diferente = [];

for (let i = 0; i < 5; i++){
    if (arrayjogador1.indexOf(arrayjogador2[i]) == -1) {
        diferente.push(arrayjogador2[i])
                
    }
}
console.log(diferente)