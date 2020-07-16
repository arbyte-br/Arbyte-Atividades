const rs = require('readline-sync');

const numprimo = require('prime-number');

let number = rs.questionFloat('insira um numero: ');

let validacao = numprimo(number) == true?'primo':'nao é primo';

console.log(validacao)