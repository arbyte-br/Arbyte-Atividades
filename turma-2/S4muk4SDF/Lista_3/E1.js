let rs = require("readline-sync")

let contador = 0
let loops = rs.questionInt("Digite o número de repetições: ")

while (contador !== loops) {
    console.log("BIP BIP")
    contador = contador + 1
}