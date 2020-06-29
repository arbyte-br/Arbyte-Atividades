/*  Faça uma função que recebe um número e devolve seu valor absoluto.
*/
 
var readline = require('readline-sync')

var numero = readline.questionInt('Insira um número ')

function numeroAbsoluto (numero) {
    var resultado = Math.abs(numero)

    return resultado
}

console.log(numeroAbsoluto(numero))

/* EXERCICIO REMOVIDO*/