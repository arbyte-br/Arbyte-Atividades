let readline = require('readline-sync');
let FasamImc = require('fasam-imc-calc');

let peso = readline.questionFloat('Insira o seu peso: ');
let alt = readline.questionFloat('Insira sua altura ')

const imc = new FasamImc();

let result = imc.calc(peso, alt);

console.log(result);




