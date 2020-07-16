/*  (OBRIGATÓRIO) ​Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
 Solicite dois números para o usuário e forneça como argumento para esta função. Escreva o resultado da função
  na tela dizendo qual menor número. 
*/ 

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variáveis onde pedimos para o usuário inserir os números.
var numero1 = readline.questionInt('Insira o primeiro número ')
var numero2 = readline.questionInt('Insira o segundo número ')

// Aqui criamos nossa função com o nome de 'menorNumero' e passamos como parâmetro a variável 'numero1' e 'numero2'.
function menorNumero (numero1, numero2) {
    // Dentro da função declaramos uma variável chamada 'menor' e nela utilizamos a função 'Math.min' para buscar o menor entre as variáveis 'numero1' e 'numero2'.
    var menor = Math.min(numero1, numero2)
    // Por fim definimos o retorno da função como a variável 'menor'.
    return menor
}

// Agora basta imprimir a função passando os parâmetros 'numero1' e 'numero2'.
console.log(menorNumero(numero1, numero2))