let rs = require('readline-sync')

let numero = rs.questionInt('Digite um numero para fazer a tabuada: ')
let resultado = 0
let i = 0
let limite = 10

while(i <= limite ){
    resultado = (numero * i)
    console.log(numero, 'x', i, '= ', resultado)
    i++
}