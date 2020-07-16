let rs = require("readline-sync")
let isOdd = require('is-odd')


let numero = rs.questionInt("Digite um número para saber se é par ou ímpar: ")

let verificador = isOdd(numero)

if (verificador === true) {
    console.log(`${numero} é Ímpar!`)
} else {
    console.log(`${numero} é Par!`)
}

