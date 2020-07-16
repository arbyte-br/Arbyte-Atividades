let FasamImc = require('fasam-imc-calc')
const FasamIMC = require('fasam-imc-calc')
const rs = require('readline-sync')

let peso = rs.questionInt('Digite o seu peso EX: 80: ')
let altura = rs.questionFloat('Digite a sua altura, EX: 1.70: ')

let imc = new FasamIMC( )

let resultado = imc.calc(peso,altura)

console.log(`O seu imc é ${resultado} `)

