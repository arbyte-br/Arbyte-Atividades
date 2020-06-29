/*  (OBRIGATÓRIO) ​Faça uma função que recebe, por parâmetro,
 um valor N e calcula e escreve a tabuada de 1 até 9. Mostre a tabuada na forma: 1 x N = N 2 x N = 2N 
 ... 9 x N = 9N 
*/
// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde pedimos para o usuário inserir um número.
var numero = readline.questionInt('Insira um número ')

// Aqui criamos nossa função com o nome de 'calcularTabuada' e passamos a variável 'numero' como parâmetro.
function calcularTabuada (numero) {
    // Dentro da função fazemos um for e, definimos o 'i' igual (=) a 0 e, enquanto 'i' for menor (<) que 10 acrescente 1 a 'i'.
    for(i = 0; i < 10; i++){
        // Dentro do loop criamos uma variável chamada 'resultado', dentro dela iremos fazer a multiplicação (*) da variável 'numero' pela variável 'i'.
        var resultado = numero * i
        // Depois basta imprimir de acordo com o enunciado, a variável 'resultado' contém a multiplicação.
        console.log(i+'x'+numero, '=',resultado )
    }
}
// Por fim, como já temos o console log dentro da função basta chamar a função aqui embaixo.
calcularTabuada(numero)