//Faça um programa que recebe um número e imprima todos os números pares de 0 até o número inserido.
//Ex: usuário inseriu​ 8
//O programa imprime: 0,2,4,6,8

let rs = require('readline-sync');

let numero = rs.questionInt('insira um número');
let n1 = -2

while (numero >= 0) { 
    n1 = n1 + 2     
    console.log(n1)
    numero = numero - 2

}
console.log('valor errado')
