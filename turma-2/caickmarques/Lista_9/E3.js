let odd = require('is-odd');
let isOdd = require('is-odd');
let rs = require('readline-sync');

let numero = rs.questionInt('Informe um numero para saber se ele e par ou impar: ');
numero = isOdd(numero);

if (numero) {
    console.log('Numero impar');
} else {
    console.log('Numero par');
}