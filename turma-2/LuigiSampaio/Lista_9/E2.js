const rs = require('readline-sync');
const FasamIMC = require('fasam-imc-calc');


let peso = rs.questionFloat('informe o seu peso: ');
let altura  = rs.questionFloat('informe a sua altura: ');

let imc = new FasamIMC(peso, altura);

console.log(`Seu IMC: ${imc.calc()}`);