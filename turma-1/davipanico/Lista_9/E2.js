/* (OBRIGATÓRIO) ​Faça um algoritmo que receba peso e altura do usuário e calcule o IMC. Para fazer o calculo
 do IMC utilize : ​https://www.npmjs.com/package/fasam-imc-calc 
*/

// Primeiro iremos instalar o módulo com o comando  npm install fasam-imc-calc.

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync');
// Variável onde chamamos o módulo 'fasamImc'.
var fasamImc = require('fasam-imc-calc');

// Aqui criamos uma variável que será resposável por criar o objeto de cálculo do IMC.
var imc = new fasamImc();

// Variável onde pedimos para o usuário inserir o seu peso.
var peso = readline.questionFloat('Digite seu peso: ');
// Variável onde pedimos para o usuário inserir sua altura.
var altura = readline.questionFloat('Digite sua Altura: ');

// Por fim, basta imprimir nossa váriavel 'imc' responsável por criar um objeto com a função '.calc' que ira fazer o cálculo do imc,
// Ela precisa de dois parâmetros, nós passamos as variáveis 'peso' e 'altura'.
console.log('IMC = ' + imc.calc(peso, altura));



