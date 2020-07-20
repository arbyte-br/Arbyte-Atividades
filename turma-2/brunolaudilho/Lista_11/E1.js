const readline = require('readline-sync');

let n1 = readline.questionInt('Digite um numero ');
let n2 = readline.questionInt('Digite outro numero ');

const soma = (n1,n2) => n1 + n2;

console.log(soma(n1,n2));