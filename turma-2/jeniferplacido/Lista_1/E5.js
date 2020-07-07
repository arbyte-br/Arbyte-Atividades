let rs = require("readline-sync")

let lista = []

let numero1 = rs.question("Digite um número:")
lista.push(numero1)

let numero2 = rs.question("Digite um número:")
lista.push(numero2)

let numero3 = rs.question("Digite um número:")
lista.push(numero3)

console.log(lista.sort())

