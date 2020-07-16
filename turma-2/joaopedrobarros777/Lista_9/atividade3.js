let rs = require("readline-sync")

const isOdd = require('is-odd')

let numero = rs.questionInt("Digite um numero\n")

let parImpar = isOdd(numero)

console.log(parImpar)

if (parImpar == false){
    console.log("PAR")
} else {
    console.log("IMPAR")
}