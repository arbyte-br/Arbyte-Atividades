// ## Importação da Biblioteca Readline-Sync
let readlineSync = require('readline-sync');

// ## Código JS
let questao = readlineSync.questionInt('Insira um numero: ');

let numero = 0;

while(numero != questao){
    numUser = readlineSync.questionInt('Insira 0 para sair ou qualquer outro numero para continuar: ');
} 