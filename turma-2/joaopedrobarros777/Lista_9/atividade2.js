let rs = require("readline-sync")

const FasamImc = require('fasam-imc-calc')

let peso = rs.questionFloat("digite seu peso em kg\n")

let altura = rs.questionFloat("digite sua altura em metros\n")

const imc = new FasamImc()

let resultado = imc.calc(peso, altura)

console.log("o seu imc é " + resultado)