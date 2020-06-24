// ## Importação de bibliotecas ##
let readlineSync = require('readline-sync'); //Biblioteca para recebimento de dados pelo usuário.

// ## Código ##
let numero1 = readlineSync.questionInt('Insira um numero ');
let numero2 = readlineSync.questionInt('Insira outro numero ');

let numero = 0;
let resultado = 0;

while(numero < numero1){ // compara se a variavel numero < numero 1 entra no laço 
    resultado = resultado + numero2; // variável resultado recebe ela mesmo somando a variavel numero2
    numero = (numero + 1); // variavel numero recebe ela + 1 
    
} //fim do laço de repetição
console.log(resultado);
//o retorno correto do resultado acontece pois a variavel resultado é somada pela quantidade de vezes da variavel numero1.
// ou seja está multiplicando.