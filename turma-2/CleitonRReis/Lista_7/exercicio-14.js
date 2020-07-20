/*
14.Faça uma função que recebe um número e devolve seu valor 
absoluto. No final peça um número para o usuário e exiba o valor absoluto.
*/

const rs = require('readline-sync');

let n1 = rs.questionInt('\nPor favor, informe um número: ');

function valorAbsoluto(num){
    return Math.abs(num);
}

let res = valorAbsoluto(n1);
console.log(res);