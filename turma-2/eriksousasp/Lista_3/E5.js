let readlineSync = require('readline-sync');

let digNum = readlineSync.questionInt('Digite um numero: ');

let numero = 0;

while (numero != digNum) {
    digNum = readlineSync.questionInt('Insira 0 para sair ou qualquer outro numero para continuar: ');
}