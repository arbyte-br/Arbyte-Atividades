let rs = require("readline-sync")

let peso = rs.questionFloat("Informe seu peso em Kg:\n")

let altura = rs.questionFloat("Informe sua altura em metros:\n")

const FasamImc = require('fasam-imc-calc');
 
const imc = new FasamImc(peso, altura);
 
console.log("Seu IMC é : " + imc.calc());