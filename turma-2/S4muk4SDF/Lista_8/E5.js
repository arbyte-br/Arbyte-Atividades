let rs = require("readline-sync")

let nomeUsuario = rs.question("Qual o seu nome? \n")
let n1 = rs.question("Qual o número 1? \n")
let n2 = rs.question("Qual o número 2? \n")
let n3 = rs.question("Qual o número 3? \n")

let dadosUsuario = {
    nome: nomeUsuario,
    primeiroNumero: n1,
    segundoNumero: n2,
    terceiroNumero: n3,
}

console.log(dadosUsuario)