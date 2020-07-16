/*  Escreva uma função que receba dois números o primeiro será a base e o segundo a potência e no final
 a função retorna a base elevada pela potência. Faça um programa que peça ao usuário a base e a potência
  e forneça para a função, no final imprima o resultado.
    OBS: O algoritmo só precisa saber lidar com números inteiros. 
*/

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variavel onde pedimos para o usuário inserir a base.
var base = readline.questionInt('Insira a base ')
// Variável onde pedimos para o usuário inserir a potência.
var potencia = readline.questionInt('Insira a potência ')

// Aqui criamos nossa função com o nome de 'calcularPotencia' e passamos como parâmetro a variável 'base' e 'potencia'.
function calcularPotencia (base, potencia) {
    // Dentro da função declaramos a variável 'resultado' e, dentro dela utilizamos a função 'Math.pow' e passamos a 'base' e a 'potencia' como parâmetro.
    // Essa função irá retornar o primeiro parâmetro elevado ao segundo parâmetro.
    var resultado = Math.pow(base, potencia)
    // Por fim definimos o retorno da função como a variável 'resultado'.
    return resultado
}

// Basta imprimir a função 'calcularPotencia' passando a 'base' e a 'potencia' como parâmetro.
console.log(calcularPotencia(base,potencia))