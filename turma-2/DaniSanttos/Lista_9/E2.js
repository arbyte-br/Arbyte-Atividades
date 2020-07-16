let fasamImc = require('fasam-imc-calc')
let rs = require('readline-sync')

let peso = rs.questionInt('Digite o seu peso: ')

let altura = rs.questionFloat('Digite sua altura: ')

let imc = new fasamImc()

console.log(imc.calc(peso, altura))