let readlineSync = require('readline-sync');

let imputNum = readlineSync.questionInt('Digite um numero: ');

let bip = String('BIP BIP');

let numero = 0;

while (numero < imputNum) {
    console.log(bip);
    numero = (numero + 1);
}