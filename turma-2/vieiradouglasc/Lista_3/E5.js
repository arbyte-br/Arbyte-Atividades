let readlineSync = require('readline-sync');
let num = readlineSync.questionInt('Insira o número 0 para sair, ou qualquer tecla para continuar: ');
while (num !== 0) {
    num = readlineSync.questionInt('Insira o número 0 para sair, ou qualquer tecla para continuar: ');
}
console.log('Você saiu!');