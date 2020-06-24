let rs = require('readline-sync');

let num1 = rs.questionInt('Insira um numero: ');
let num2 = rs.questionInt('Insira outro numero: ');
let resultado = 0;
let i = 0;

if (num1 > 0 && num2 > 0) {
    while (i < num1) {
        resultado += num2;
        i++;
    }
    console.log(resultado);
} else {
    console.log('Dados invalidos!!!');
}