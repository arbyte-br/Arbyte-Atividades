let rs = require ("readline-sync")

let n1 = rs.questionFloat('Digite um número: ') 
let n2 = rs.questionInt('Digite outro número: ') 

let contador = 0
let resultado = 0

while(contador < n2) {
    resultado = resultado + n1
    contador++
}
console.log("O resultado da multiplicação é: " + resultado)