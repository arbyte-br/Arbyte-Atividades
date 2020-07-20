const readline = require('readline-sync');

let num1 = readline.questionInt('Por gentileza insira um número: ');
let num2 = readline.questionInt('Por gentileza insira um número: ');
let num3 = readline.questionInt('Por gentileza insira um número: ');

let coringa = '';

if (num1 < num2 && num1 < num3 && num2 < num3){
    console.log(`${num1}, ${num2}, ${num3}`);
}else if (num2 < num1 && num2 < num3 && num1 < num3) {
    console.log(`${num2}, ${num1}, ${num3}`);
}else if (num3 < num1 && num3 < num2 && num2 < num1){
    console.log(`${num3}, ${num2}, ${num1}`);
}else if(num1 < num2 && num1 < num3 && num3 < num2){
    console.log(`${num1}, ${num3}, ${num2}`);
}else{
    console.log(`${num2}, ${num3}, ${num1}`);
}