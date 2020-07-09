//Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
//Para fazer o calculo do IMC utilize : ​ https://www.npmjs.com/package/fasam-imc-calc

let rs = require('readline-sync');
const calculoImc = require('fasam-imc-calc');

let peso = rs.questionFloat('Insira o seu peso para calcular o seu IMC:');
let altura = rs.questionFloat('Insira a sua altura para calcular o seu IMC:');

const imc = new calculoImc(peso, altura);

console.log(imc.calc())