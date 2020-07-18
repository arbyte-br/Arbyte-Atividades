
let rs = require('readline-sync');
let imc = require('fasam-imc-calc');

let calcImc = new imc();

let altura = rs.questionFloat('Digite a sua Altura: ');
let peso = rs.questionFloat('Digite o seu peso: ');

console.log('O seu IMC é : ', calcImc.calc(peso, altura));
