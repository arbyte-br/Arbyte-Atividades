let rs = require("readline-sync")
let isPrime = require('prime-number')


let numero = rs.questionInt("Digite um número para saber se ele é Primo: ")

let verificador = isPrime(numero)

if (verificador === true) {
    console.log(`${numero} é Primo!`)
} else {
    console.log(`${numero} não é Primo!`)
}
