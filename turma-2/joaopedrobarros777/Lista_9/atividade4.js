let rs = require("readline-sync")

const isPrime = require('prime-number')

let numero = rs.questionInt("Digite um numero\n")

if (isPrime(numero) == true){
    console.log("PRIMO")
} else {
    console.log("nao eh primo")
}