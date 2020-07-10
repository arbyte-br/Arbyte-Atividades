let user = require('readline-sync');
let FasamImc = require('fasam-imc-calc');

let imc = new FasamImc();

let peso = user.questionInt('Insira seu peso: \n');
let altura = user.questionFloat('Insira sua altura: \n');

console.log('Seu IMC é: '+ imc.calc(peso, altura));