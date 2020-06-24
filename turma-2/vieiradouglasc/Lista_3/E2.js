let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt('Informe o primeiro número: ');
let num2 = readlineSync.questionInt('Informe o segundo número: ');
let soma = 0;
let contador = 1;

while (contador <= num1){
    soma = soma + num2;
    contador++
}
console.log(soma);
