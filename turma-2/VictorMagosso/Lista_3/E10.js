let rs = require('readline-sync')

let numero = rs.questionInt('Digite um número')

let divisor = 0;
while (divisor <= numero){
    divisor++
    if(numero%divisor == 0){
        console.log(divisor)
    }
}
console.log('==============================')