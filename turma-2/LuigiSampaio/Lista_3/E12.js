let rs = require('readline-sync');

let num = rs.questionFloat('insira um numero: ');

let cont = 0;
let acum = num;


while(cont < 14){
    let num = rs.questionFloat('insira outro numero: ');
    acum += num;
    cont++
}
console.log(`resultado: ${acum / 2}`);