let rs = require("readline-sync")

let lista = []

let numero1 = rs.questionInt("Digite um numero?")

lista.push (numero1)

let numero2 = rs.questionInt("Digite outro numero?")

lista.push (numero2)

let numero3 = rs.questionInt("Digite mais um numero?")

lista.push (numero3)

console.log (lista.sort())