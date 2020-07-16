/** Faça um algoritmo que receba peso e altura do usuário e calcule o
IMC. */

let rs = require('readline-sync')
let FasamIMC = require('fasam-imc-calc')

let peso = rs.questionInt('Digite o peso para o calculo ')
let altura = rs.questionFloat('Digite a altura para calculo ')

let imc = new FasamIMC(peso, altura)

console.log('Seu IMC é: ' + imc.calc())