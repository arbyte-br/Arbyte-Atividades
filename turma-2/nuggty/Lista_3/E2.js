let rs = require('readline-sync');

let n1 = rs.questionInt('Digite um número: ');
let n2 = rs.questionInt('Digite outro número: ');
let num = 0;
let soma = 0;

while(num < n1) {
    soma = soma + n2;
    num++;
}
console.log(soma)