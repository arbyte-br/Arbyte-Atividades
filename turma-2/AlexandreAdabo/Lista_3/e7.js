let rs = require('readline-sync')

let base = rs.questionFloat('Digite um numero: ')
let potencia = rs.questionFloat('Digite mais um numero: ')
let total = base
let contador = 1 
while(contador < potencia){
    total =  total * base
    contador++
}
console.log(total)