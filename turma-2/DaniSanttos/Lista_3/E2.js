let rs = require("readline-sync")

let num1 = rs.questionInt("Insira um numero: ")
let num2 = rs.questionInt("Insira outro numero: ")

resultado = 0
numero = 0

while (numero <= num1){
    resultado = resultado + num2
    numero = numero + 1
}

console.log(resultado)