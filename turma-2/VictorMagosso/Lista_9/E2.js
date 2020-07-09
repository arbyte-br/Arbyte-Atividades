let Imc = require('fasam-imc-calc')
let rs = require('readline-sync')

let peso = rs.questionInt('Qual seu peso? ')
let altura = rs.questionFloat('Qual sua altura? ')

let imc = new Imc()

console.log(imc.calc(peso, altura))