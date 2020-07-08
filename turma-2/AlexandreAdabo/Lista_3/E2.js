let rs = require('readline-sync')

let num1 = rs.question('Digite o primeiro numero: ')
let num2 = rs.question('Digite o segundo numero: ')
let i = 0
let resultado = 0
while(i < num2){
    resultado = parseFloat(resultado) + parseFloat(num1)
    i++
}
console.log('O resultado da multiplicacao é: ' + resultado)