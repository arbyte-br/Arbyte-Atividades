let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt('Insira o valor inicial: ');
let num2 = readlineSync.questionInt('Insira o valor final: ');
for(var i = num1; i <= num2; i++){
    console.log(i);
}