//Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
//Solicite dois números para o usuário e forneça como argumento para esta função.
//Escreva o resultado da função na tela dizendo qual menor número.

let rs = require('readline-sync');

let numero1 = rs.questionInt('insira um número:');
let numero2 = rs.questionInt('insira um número:');
let numeros=[numero1,numero2]

function oMenorNumero(numeros) {
    return Math.min.apply(null,numeros);
} 
console.log('o menor valor é o:')
console.log(oMenorNumero(numeros))
