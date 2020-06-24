// ## Importação de bibliotecas ##
let readlineSync = require('readline-sync'); //Biblioteca para recebimento de dados pelo usuário.

// ## Código ##
let numUser = readlineSync.questionInt('Insira um numero ');

let numero = 0;

while(numero <= numUser){ // variavel numero compara se menor que variável numUser se sim entra no laço
    console.log(numero); // exibe o número da variável número
    numero = (numero + 2); // variavel numero recebe o valor já existente + 2
} 

//e retorna ao laço até ser menor ou igual a variárel numUser