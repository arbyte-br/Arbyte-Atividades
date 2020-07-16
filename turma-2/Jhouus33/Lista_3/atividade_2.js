let rs = require('readline-sync')


let numero1 = rs.questionFloat("Me diga um número:   \n")
let numero2 = rs.questionInt("Me diga outro número(Eu vou multiplicar os 2):   \n")
let contador = 0
let resultado = 0

while (contador !== numero2) {
    resultado = resultado + numero1
    contador = contador + 1
    
}

console.log('O resultado da multiplicação é ' + resultado)