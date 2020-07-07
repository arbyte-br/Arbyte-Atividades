let rs = require("readline-sync")

let contador = 0
let limite = rs.questionInt("Digite um número: ")

while (contador <= limite) {
    if (contador % 2 === 0) {
    console.log("Número " + contador + " é par.")
    }
    contador++
}