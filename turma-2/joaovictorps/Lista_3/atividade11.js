let rs = require('readline-sync')
console.log("=======================================")
console.log("TABUADA")
console.log("=======================================")
let numero2 = rs.questionInt('Informe um numero: ')

let contador = 1

let numero = 10
console.log("=======================================")
while(contador <= 10) {
    numero = numero2 * contador
    console.log(numero2+'x'+contador+'='+numero)
    contador++
}
console.log("=======================================")