let rs = require('readline-sync')
const FasamImc = require('fasam-imc-calc');

let peso = rs.questionInt('Digite seu peso: ');
let altura = rs.questionInt('Digite sua altura: ');

const imc = new FasamImc(peso, altura);

console.log(imc.calc());