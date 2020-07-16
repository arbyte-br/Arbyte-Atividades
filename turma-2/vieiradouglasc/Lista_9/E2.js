// Faça um algoritmo que receba peso e altura do usuário e calcule o
// IMC.

let rs = require('readline-sync')
let FasamIMC = require('fasam-imc-calc')

let peso = rs.questionInt('Insira seu peso: ')
let altura = rs.questionFloat('Insira sua altura em metros (Ex: 1.92): ')

let resultIMC = new FasamIMC(peso, altura)

console.log('Seu IMC é: ' + resultIMC.calc())