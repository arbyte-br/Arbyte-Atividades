const rs = require('readline-sync');
const isPrime = require('prime-number');

let number = rs.questionFloat('insira um numero: ');

let validacao = isPrime(number) == true?'primo':'nao primo';
console.log(validacao)