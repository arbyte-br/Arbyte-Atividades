let rs = require('readline-sync');

let nPrimeiro = rs.questionInt('Digite um numero inicial: ');

let nSegundo = rs.questionInt('Digite um numero final: ');

if (nSegundo <= nPrimeiro) {
    console.log('digite um numero final maior que o numero inicial ')
}

for (let i = nPrimeiro; i <= nSegundo; i++) {

    console.log(i);
}