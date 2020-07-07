let rs = require("readline-sync")



let nomeUsuario = rs.question("Digite seu nome: ")

let notaA = rs.question("Digite sua nota A: ")

let notaB = rs.question("Digite sua nota B: ")

notaA = notaA * 0.3

notaB = notaB * 0.7

let notaFinal = notaA + notaB 

notaFinal = Math.round(notaFinal * 100) / 100

console.log(nomeUsuario + ", sua nota final foi: " + notaFinal)