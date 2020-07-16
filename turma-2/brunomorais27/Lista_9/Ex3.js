const rs = require('readline-sync');

const isOdd = require('is-odd');

let num = rs.questionFloat('insira um numero: ');

let validacao = isOdd(num) == true?'ímpar':'par'

console.log(validacao)