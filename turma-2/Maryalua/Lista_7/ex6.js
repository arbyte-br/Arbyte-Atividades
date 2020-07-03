//Escreva uma função que receba dois números o primeiro será a base e o segundo a
//potência e no final a função retorna a base elevada pela potência.
//Faça um programa que peça ao usuário a base e a potência e forneça para a função,
//no final imprima o resultado.
//OBS: O algoritmo só precisa saber lidar com números inteiros.

let rs = require('readline-sync');
let numero1 = rs.questionInt('insira um número:');
let numero2 = rs.questionInt('insira outro número:');



function potencia (numero1,numero2){
    return resultado = Math.pow(numero1,numero2)
} console.log(potencia (numero1,numero2))