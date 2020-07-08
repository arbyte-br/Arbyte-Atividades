let numeroPrimo = require('prime-number');
let rs = require('readline-sync');

let numero = rs.questionInt('Informe um numero para saber se ele e numero primo: ');

if (numeroPrimo(numero)) {
    console.log(`O ${numero} é numero primo`);
} else {
    console.log(`O ${numero} não é numero primo`);
}