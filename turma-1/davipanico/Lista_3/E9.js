/* Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
EX: usuário informou BANANA
Algoritmo imprime:
ANANAB */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos uma palavra ao usuário.
var palavra = readline.question("Qual a palavra? ")
// Variável onde iremos armazenar o tamanho da palavra do usuário utilizando a função 'length'.
var tamanho = palavra.length

// Condição, enquanto a variável 'tamanho' for maior ou igual (>=) a 0 vamos fazer o seguinte:
while(tamanho >= 0){
    // Imprimimos a variável 'palavra' com a função 'charAt()' utilizando a variável 'tamanho' como índice da letra.
    console.log(palavra.charAt(tamanho)) 
    // Por fim removemos 1 da variável tamanho.
    tamanho--
}