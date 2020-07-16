let rs = require ('readline-sync')

let primeironumero = rs.questionFloat ("Digite um numero:\n")
let segundonumero = rs.questionInt ("Digite um segundo numero:\n")

let contador = 0
let resultado = 0

while(contador < segundonumero){
    resultado = resultado + primeironumero
    contador++
}
console.log("O resultado da sua multiplicacao e:" + resultado)