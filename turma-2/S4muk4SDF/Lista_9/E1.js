let rs = require("readline-sync")

let md = require("median")

let listaNumeros = []

let n1 = rs.questionInt("Digite um número: ")
listaNumeros.push(n1)
let n2 = rs.questionInt("Digite um número: ")
listaNumeros.push(n2)
let n3 = rs.questionInt("Digite um número: ")
listaNumeros.push(n3)
let n4 = rs.questionInt("Digite um número: ")
listaNumeros.push(n4)

let media = md(listaNumeros)

console.log("A média desses números são: " + media)