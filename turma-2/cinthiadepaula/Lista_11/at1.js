const rs = require('readline-sync');

let a = rs.questionInt('Digite um numero: ');
let b = rs.questionInt('Digite um numero: ');

const soma = (a,b) => a+b;

console.log(soma(a,b));

