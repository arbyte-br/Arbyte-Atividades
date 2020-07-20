const readline = require('readline-sync');

let num1 = readline.questionInt('Por gentileza insira um número de 1 a 100: ');
let num2 = readline.questionInt('Por gentileza insira outro número de 1 a 100: ');

const ping = 'Ping';
const pong = 'Pong';
cont = num1;

while (cont <= num2){
    
    if (num1 % 7 == 0){
        console.log(ping);
    } else if (cont % 5 == 0){
        console.log(pong);
    }else if ((num1 % 7 !== 0 && num2 % 7 !== 0) && (num2 % 5 !== 0 && num2 % 5 !== 0)) {
        console.log(`${ping} ${pong}`);
    } else{
        console.log(cont)
    }
    cont = (cont + 1);
    
}