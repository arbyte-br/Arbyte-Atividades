let rs = require("readline-sync")

let contador = 0

let limite = 100

while (contador <= limite) {
    if (contador % 2 !== 0) {
    console.log("Número " + contador + " é ímpar.")
    }
    contador++
}
