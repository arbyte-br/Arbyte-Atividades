// ## Importação de bibliotecas ##
let readlineSync = require('readline-sync'); //Biblioteca para recebimento de dados pelo usuário.

// ## Código ##
let numUser = readlineSync.questionInt('Insira um numero ');

let numero = 0;

while(numero != numUser){ // compara variavel numero com variavel numUser, se diferente de 0 entra no laço
    numUser = readlineSync.questionInt('Insira 0 para sair ou qualquer outro numero para continuar:\n');
    // exibe a mensagem acima para pressionar 0 para sair, ou qualquer outro número para continuar o laço.
} 