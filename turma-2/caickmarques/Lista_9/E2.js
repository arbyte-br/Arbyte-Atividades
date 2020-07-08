let fimc = require('fasam-imc-calc');
let FasamIMC = require('fasam-imc-calc');
let rs = require('readline-sync');

let peso = rs.questionInt('Informe o seu peso para descobrir o seu IMC: ');
let altura = rs.questionFloat('Agora informe sua altura: ');

let imc = new FasamIMC(peso, altura);

let resultadoIMC = imc.calc();

console.log(`O seu IMC é ${resultadoIMC}`);