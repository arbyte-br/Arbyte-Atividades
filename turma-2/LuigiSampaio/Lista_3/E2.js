let rs = require('readline-sync');

let num1 = rs.questionFloat('insira um numero: ');

let num2 = rs.questionFloat('insira outro numero: ');

let soma = 0;

let cont=1; 

while(cont <= num1){
    soma+=num2;
    cont++
}

console.log(soma)
