const rs= require ('readline-sync')
const FasamImc = require('fasam-imc-calc');
const peso = rs.questionInt('Digite seu peso: ')
const altura = rs.questionInt('Digite sua altura: ')
const imc = new FasamImc(peso, altura); // peso, altura
 
console.log('Seu IMC é ' + imc.calc())