/* Faça um programa que leia dois números, o primeiro é o valor inicial de um contador, e
o
segundo é o valor final do contador (verifique se o valor inicial fornecido é inferior ao
valor final). Usando o comando For, escreva na tela uma contagem que comece no
primeiro número lido, escreva os números seguintes colocando apenas um número em
cada nova linha da tela, até chegar ao valor final indicado.
Entre com o Valor Inicial: 11
Entre com o Valor Final: 13
Contagem:
11
12
13
Final da contagem... */

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde pedimos ao usuário o número inicial.
var inicial = readline.questionInt('Insira o número inicial ')
// Variável onde pedimos ao usuário o número final.
var final = readline.questionInt('Insira o número final ')

// Condição, aqui iremos fazer um pequeno while para garantir que o usuário não insira um número inicial maior que o final.
// Enquanto (while) a variável 'inicial' for maior ou igual (>=) que a variável 'final', então:
while (inicial >= final) {
    // Chamamos a variável 'final' novamente e informamos que ela não pode ser inferior a variável 'inicial'.
    final = readline.questionInt('Número inicial menor que o final. Insira outro número final.')
}

// Condição, após sair do while, nós definimos a variável 'i' com o valor da variável 'inicial' e, enquanto a variável 'i' for menor ou igual (<=) que a variável 'final', incrementamos mais um (i++).
for (i = inicial; i <= final; i++){
    // Dentro do loop iremos imprimir a variável (i) que vai conter os valores a serem impressos.
    console.log(i)
}