let isOdd = require('is-odd');
let rs = require('readline-sync');
let numero = rs.questionInt('Digite um numero e veja se ele pode ser impar ou par: ')

if (isOdd(numero) === true) {
    console.log(`O número digitado: ${numero} é ímpar`);
} else {
    console.log(`O número digitado: ${numero} é par`)
}