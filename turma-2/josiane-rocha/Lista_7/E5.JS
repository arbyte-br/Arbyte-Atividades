let rs = require('readline-sync');

let num = rs.questionInt('insira um numero: ');
let num1 = rs.questionInt('insira outro numero: ');

function menor (){
    let calc = num < num1?`numero ${num} menor`:`numero ${num1} menor`;
    return calc;
}

let result = menor()
console.log(result)