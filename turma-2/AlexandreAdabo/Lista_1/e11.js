let rs = require('readline-sync')

let num = rs.questionFloat('Digite um numero: \n')
let resultado = 0

if(num > 0){
    resultado = resultado + (num * 2)
    console.log(resultado)
} else if(num < 0){
    resultado = resultado +(num * 3)
    console.log(resultado)
}
