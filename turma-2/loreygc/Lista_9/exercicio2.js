let rs = rs.require('readline-sync');
let FasamImc = require('fasam-imc-calc');

let peso = rs.questionFloat('Insira o seu peso: ');
let alt = rs.questionFloat('Insira sua altura ')

const imc = new FasamImc();

let result = imc.calc(peso, alt);

console.log(result);
