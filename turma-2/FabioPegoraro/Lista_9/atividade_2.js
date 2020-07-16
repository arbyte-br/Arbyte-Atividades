// ​Faça um algoritmo que receba peso e altura do usuário e calcule o IMC. 


let rs = require ('readline-sync')
let FasamImc = require('fasam-imc-calc');
 

let peso = rs.questionInt('Digite seu peso:')
let altura = rs.questionFloat('Digite sua altura:')

let imc = new FasamImc(peso, altura)
 
console.log('Seu imc é:',imc.calc())
