let rs = require("readline-sync")

let numero1 = rs.questionInt("Digite um numero?\n")

let contador = 0
let repeticoes = numero1

console.log ("==============================")
while (contador <= repeticoes) {
    console.log (contador)
    contador = contador + 2
}
console.log ("==============================")