let FasamImc = require('fasam-imc-calc');
let rs = require('readline-sync')
let imc = new FasamImc();

let peso = rs.questionInt("Insira seu peso: ");
let altura = rs.questionFloat('Insira sua altura: ')

console.log('Seu IMC é: ' + imc.calc(peso,altura))