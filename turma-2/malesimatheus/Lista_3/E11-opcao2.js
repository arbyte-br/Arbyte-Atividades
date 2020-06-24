let rs = require('readline-sync');

let numero = Number(rs.question('Insira um numero de 1 a 10: '));

while (numero < 1 || numero > 10) {
    numero = Number(rs.question('Numero invalido! Insira um numero de 1 a 10: '));
}

let tabuada = [];

let i = 1

while (i < 11) {
    let resultado = i * numero;
    let item = String(numero + ' * ' + i + ' = ' + resultado);
    tabuada.push(item);
    i = i + 1;
}

console.log(tabuada);