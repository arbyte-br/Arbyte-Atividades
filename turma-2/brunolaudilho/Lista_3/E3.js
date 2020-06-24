// ## Importação de bibliotecas ##
let readlineSync = require('readline-sync'); //Biblioteca para recebimento de dados pelo usuário.

// ## Código ##
let numero = 1;

while(numero < 100){ // variavel numero compara se menor que 100 se sim entra no laço
    console.log(numero); // exibe o número da variável número
    numero = (numero + 2); // variavel numero recebe o valor já existente + 2, e retorna ao laço até ser menor que 100
} 