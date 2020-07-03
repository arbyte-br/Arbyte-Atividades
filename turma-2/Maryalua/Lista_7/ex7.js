//Faça uma função que recebe um número e devolve seu valor absoluto.
//No final peça um número para o usuário e exiba o valor absoluto.

let rs = require('readline-sync');

let numero = rs.questionInt('insira um número:')
function valorAbsoluto(numero) {
    return Math.abs(numero)
} console.log(valorAbsoluto(numero))