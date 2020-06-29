/* Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em
uma linha.
EX: usuário informou MAÇÃ
O algoritmo imprime:
M
A
Ç
Ã */

// preciso corrigir, está imprimindo ao contrário

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync');

// Variável onde pedimos uma palavra ao usuário.
var palavra = readline.question("Insira uma palavra! ");
// Variável onde armazenamos o tamanho que a palavra tem, para isso utilizamos a função nativa do JavaScript 'lenght', essa função nos retorna quantos caracteres possui a palavra.
var tamanho = palavra.length;
// Variável onde definimos nosso contador.
var contador = 0;

// Condição, enquanto (while) a variável 'contador' for menor (<) que a variável 'tamanho' faremos o seguinte:
while(contador < tamanho){
    // Iremos imprimir a variável 'palavra' só que com a função nativa do JavaScript 'charAt' e definindo que queremos a letra 'contador'
    // A função charAt() pede um parâmetro, este parâmetro é o número da letra que você deseja imprimir, no caso nosso contador começa em 0, então ele ira imprimir a letra de número 0.
    // Por fim incrementamos 1 ao 'contador' e retornamos ao começo do loop.
    console.log(palavra.charAt(contador));  
    contador++;
}