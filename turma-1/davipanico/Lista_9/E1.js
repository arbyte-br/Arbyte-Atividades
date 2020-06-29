/*  (OBRIGATÓRIO) ​Faça uma programa que receba 4 notas e calcule a mediana e apresente ao usuário
 o resultado. Utilize o pacote : ​https://www.npmjs.com/package/median 
*/

// primeiro utilize o comando npm install median no console para instalar o módulo 'median'.

// Variável onde chamamos o modúlo 'median'.
var median = require('median')
// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Array onde iremos adicionar os número que o usuário inserir.
var numeros = []

// Condição, aqui definimor a variável 'i' igual (=) a 0 e, enquanto 'i' for menor (<) que 4, incremente mais um (i++).
for (i = 0; i < 4; i++) {
    // Dentro do loop criamos a variável 'numero' e pedimos para o usuário inserir um número.
    var numero = readline.questionInt('Insira um número ')
    // Logo após pegamos o nosso array 'numeros' e utilizamos o '.push' e passamos a variável 'numero' como parâmetro para adicionar o valor dela ao array.
    numeros.push(numero)
}

// Por fim criamos uma variável que irá armazenas a média dos números.
// Dentro da variável chamamos o módulo 'median' que é uma função que recebe um parâmetro, no caso o nosso array 'numeros'.
var media = median(numeros)
// Por fim basta imprimir o valor de 'media'.
console.log('A média é de', media)