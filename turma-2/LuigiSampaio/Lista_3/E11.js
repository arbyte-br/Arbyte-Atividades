let rs = require('readline-sync');

let num = rs.questionInt('insira um numero: ');

let cont = 0;
let soma = 0;

while(cont <= 10){
    soma = num * cont
    console.log(`${cont} X ${num} = ${soma}`)
    cont++
}
