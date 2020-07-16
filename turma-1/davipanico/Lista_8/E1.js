/*  (OBRIGATÓRIO) ​Crie um programa que receba 3 entradas do usuário. A cor, o modelo e a marca,
 crie um objeto Carro e atribua as entradas do usuário neste objeto.
  No final o programa deve imprimir as informações do carro.
   Utilize a criação de objetos para resolver este problema 
*/

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde criamos um objeto vazio chamado de 'carro'.
var carro = {}
// Aqui chamamos a propriedade 'cor' do objeto 'carro' e pedimos para que o usuário insira qual a cor do carro.
carro.cor = readline.question('Qual a cor do carro? ')
// Aqui chamamos a propriedade 'modelo' do objeto 'carro' e pedimos para que o usuário insira qual o modelo do carro.
carro.modelo = readline.question('Qual a modelo do carro? ')
// Aqui chamamos a propriedade 'marca' do objeto 'carro' e pedimos para que o usuário insira qual o modelo do carro.
carro.marca = readline.question('Qual a marca do carro? ')

// Por fim basta imprimir o objeto 'carro'.
console.log(carro)
