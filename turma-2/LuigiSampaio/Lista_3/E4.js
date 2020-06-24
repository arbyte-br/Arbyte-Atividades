let rs = require('readline-sync');

let num = rs.questionInt('insira um numero: ');
let cont = 0;

while(cont <= num){
    if(cont % 2 ==0){
        console.log(cont)
    }
    cont++
}