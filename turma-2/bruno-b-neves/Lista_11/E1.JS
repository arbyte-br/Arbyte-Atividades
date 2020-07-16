const rs = require('readline-sync');

let a = rs.questionInt('Por favor insira um numero: ');
let b = rs.questionInt('Por favor insira mais um numero: ');

const soma = (a, b) => a + b; 

console.log(soma(a, b));