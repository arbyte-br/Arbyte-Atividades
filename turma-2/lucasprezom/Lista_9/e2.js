// 2.(OBRIGATÓRIO)​ Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
// Para fazer o calculo do IMC utilize : ​https://www.npmjs.com/package/fasam-imc-calc

let rs = require ('readline-sync')
let FasamImc = require('fasam-imc-calc');

let peso = rs.questionInt('Digite o seu peso:\n')
let altura = rs.questionFloat('Digite a sua altura:\n')

let imc = new FasamImc(peso, altura);
 
console.log(imc.calc());
