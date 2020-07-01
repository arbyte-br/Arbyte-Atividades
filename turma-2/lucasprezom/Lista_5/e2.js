let rs = require('readline-sync');

let num1 = rs.questionInt('Digite um numero inicial: ');

let num2 = rs.questionInt('Digite um numero final: ');

for (let i = num1; i <= num2; i++) {

    console.log(i);
}