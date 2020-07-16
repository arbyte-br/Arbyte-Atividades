/*  (OBRIGATÓRIO) ​Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
Utilize o pacote : ​https://www.npmjs.com/package/age-calculator 
*/
 
// Primeiro instalamos o módulo 'age-calculator' com o comando npm install age-calculator.

// Variável onde chamamos o módulo 'age-calculator'.
var ageCalculator = require('age-calculator')
// Variável onde importamos a classe 'AgeFromDate' do módulo 'age-calculator'. 
var {AgeFromDate} = require('age-calculator');
// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde pedimos o ano de nascimento do usuário.
var ano = readline.questionInt('Qual seu ano de nascimento? AAAA ')
// Variável onde pedimos o mês de nascimento do usuário.
var mes = readline.questionInt('Qual seu mês de nascimento? MM ')
// Variável onde pedimos o dia de nascimento do usuário.
var dia = readline.questionInt('Qual seu dia de nascimento? DD ')

// Aqui chamamos a classe 'AgeFromDate' e dentro dela criamos um novo objeto passando como parâmetro uma nova data (new Date) e,
// no parâmetro da nova data passamos as variáveis 'ano', 'mes' e 'dia'.
var AgeFromDate = new AgeFromDate(new Date(ano, mes, dia))

// Por fim basta imprimir a variável 'AgeFromDate'.
console.log(AgeFromDate)