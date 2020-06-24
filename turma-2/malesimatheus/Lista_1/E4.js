let rs = require('readline-sync');

let numeroDeMacas = Number(rs.question('Insira o numero de macas compradas: '));

let preco = 0;

if (numeroDeMacas < 12) {
    preco = 0.30 * numeroDeMacas;
} else {
    preco = 0.25 * numeroDeMacas;
}

console.log(preco.toFixed(2));