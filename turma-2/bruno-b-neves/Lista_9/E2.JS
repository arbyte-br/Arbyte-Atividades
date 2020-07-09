const rs = require('readline-sync');

const FasamIMC = require('fasam-imc-calc');

let weight = rs.questionInt('Qual o seu peso: ');
let height = rs.questionFloat('Qual a sua altura: ');

const imc = new FasamIMC();

console.log(imc.calc(weight, height));