let rs = require('readline-sync');

let n1 = Number(rs.question('Insira o primeiro numero: '));
let n2 = Number(rs.question('Insira o primeiro numero: '));

let resultado = 0;

if (n1 > 0 && n2 > 0) {
    while (n1 > 0) {
        resultado = resultado + n2;
        n1 = n1 - 1;
    }
    console.log(resultado)
} else {
    console.log('Numero invalido');
}