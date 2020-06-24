let rs = require('readline-sync');

let numeroBase = Number(rs.question('Insira o numero base: '));
let expoente = Number(rs.question('Insira o expoente: '));

let resultado = 1

while(expoente > 0) {
    resultado = resultado * numeroBase;
    expoente = expoente - 1;
}

console.log(resultado);