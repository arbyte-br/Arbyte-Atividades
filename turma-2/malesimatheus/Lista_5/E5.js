let rs = require('readline-sync');

let numero = Number(rs.question('Insira o numero: '));

let resultado = 1;

for (let i = 1; i <= numero; i++) {
    resultado = resultado * i;

    if (i >= numero) {
        console.log(resultado);
        numero = Number(rs.question('Se quiser fazer novamente, digite um numero: '));
    }
}

