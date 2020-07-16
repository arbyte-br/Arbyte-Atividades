let FasamImc = require('fasam-imc-calc');
let rs = require('readline-sync') 

let peso = rs.questionFloat('Digite seu peso em kg: \n')
let altura = rs.questionFloat('Digite sua altura em metros: \n')

let calculoImc = new FasamImc(peso, altura); 
 
let imc = calculoImc.calc();

console.log(imc)