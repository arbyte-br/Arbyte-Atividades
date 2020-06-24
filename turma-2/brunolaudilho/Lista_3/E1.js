// ## Importação de bibliotecas ##
let readlineSync = require('readline-sync'); // Biblioteca para recebimento de dados pelo usuário.

// ## Código ##
let numeroUser = readlineSync.questionInt('Insira um numero ');

let bip = String('BIP BIP');

let numero = 0;

while(numero < numeroUser){ // numero = 0 compara se menor que numero que usuário digitou.
    console.log(bip); // exibe o conteudo da variável bip
    numero = (numero + 1); // ele recebe o valor já existente + 1, e retorna ao laço
} 
/*quando alcançar o valor da variável numeroUser ele finaliza e exibe a quantidade da variavel
bip conforme número digitado pelo usuário*/ 


