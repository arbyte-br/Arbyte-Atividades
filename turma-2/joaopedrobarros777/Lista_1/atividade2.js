let rs = require("readline-sync")

let numero = rs.questionInt("Digite um numero!")

let numeroPar

if (numero % 2 == 0) {
    console.log("PAR")
} else {
    console.log("IMPAR")
}