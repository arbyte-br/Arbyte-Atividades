let rs = require('readline-sync');

let num = rs.questionInt('insira um numero: ');

let cont = 0;

while(cont <= num){
    if (num % cont == 0){
        console.log(cont)
    }
    cont++
}