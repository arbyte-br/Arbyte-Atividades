let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('Digite um número qualquer: ');

while (numero >= 1){
    console.log('BIP BIP');
    numero = numero - 1;
}