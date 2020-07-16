let rs = require("readline-sync")
let FasamIMC = require("fasam-imc-calc")

let peso = rs.questionInt("Digite seu peso: ")
let altura = rs.questionFloat("Digite sua altura (Ex: 1.70): ")

let imc = new FasamIMC(peso, altura)

console.log("Seu IMC é: " + imc.calc())