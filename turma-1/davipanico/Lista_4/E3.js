/* (OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
tela, com N linhas:
*
* *
* * *
* * * *
* * * * * 
*/

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync');

// Variável onde pedimos um número ao usuário;
var numero = readline.questionInt("Qual o numero?  ");
// Variável que definimos nosso contador para utilizar no while
var contador = 1
// Variável onde armazenamos a stringing escrito '*'.
var string = "*";

// Condição, enquanto (while) a variável 'contador' for menor ou igual (<=) a variável 'numero' faremos o seguinte:
while(contador <= numero){
    // Aqui iremos utilizar uma função nativa do JavaScript chamada '.repeat()', essa função irá repetir o conteúdo da variável 'string' o tanto de vezes que estiver no valor da variável 'contador'.
    console.log(string.repeat(contador));
    // Por fim incrementamos mais (++) 1 a variável contador.
    contador++;
}