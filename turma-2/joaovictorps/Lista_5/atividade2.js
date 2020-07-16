let rs = require('readline-sync')

let num1 = rs.questionInt('Digite um número : ')
let num2 = rs.questionInt('Digite outro número maior que o anterior: ')

if( num1 < num2) {
    for(num1; num1 <= num2; num1++) {
        console.log(num1) 
    }
}   else {
    console.log('Você digitou o segundo número menor que o primeiro.')
}