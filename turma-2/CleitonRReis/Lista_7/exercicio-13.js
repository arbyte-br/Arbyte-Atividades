/*
13.Escreva uma função que receba dois números o primeiro será a base e o segundo a potência e no 
final a função retorna a base elevada pela potência. Faça um programa que peça ao usuário a base e a potência 
e forneça para a função, no final imprima o resultado. OBS: O algoritmo só precisa saber lidar com números inteiros.
*/

const rs = require('readline-sync');

let n1 = rs.questionInt('Por favor, informe um número: ');

let n2 = rs.questionInt('Por favor, informe outro número: ');

function descobrePotencia(){
        return n1 ** n2
}

let res = descobrePotencia();
console.log(res);