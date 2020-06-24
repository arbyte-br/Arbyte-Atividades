let readlineSync = require('readline-sync');

let numUm = readlineSync.questionInt('Digite o primeiro numero: ');
let numDois = readlineSync.questionInt('Digite o segundo numero: ');

let numero = 0;
let result = 0;

while (numero < numUm) {
    result = result + numDois;
    numero = (numero + 1);
}
console.log(result);