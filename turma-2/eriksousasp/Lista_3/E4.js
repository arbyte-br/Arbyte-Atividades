let readlineSync = require('readline-sync');

let digNum = readlineSync.questionInt('Digite um numero: ');

let numero = 0;

while (numero <= digNum) {
    console.log(numero);
    numero = (numero + 2);
}