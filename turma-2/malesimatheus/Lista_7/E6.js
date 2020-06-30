let rs = require('readline-sync');

let base = rs.question('Insira a base: ');
let expoente = rs.question('Insira o expoente: ');

function potenciacao(base, expoente) {
    let resultado = 1;
    for(let i = 0; i < expoente; i ++) {
    resultado = resultado * base;
    }
    console.log(resultado);
}

potenciacao(base, expoente)