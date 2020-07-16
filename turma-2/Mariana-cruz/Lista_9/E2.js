// // 2. (OBRIGATÓRIO) Faça um algoritmo que receba peso e altura do usuário e calcule o
// // IMC.
// // Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc


let rs = require('readline-sync')
let FasamImc = require('fasam-imc-calc');


let peso = rs.questionFloat("Qual o seu peso? ")
let altura = rs.questionFloat("E a sua altura? ")


let imc = new FasamImc(peso,altura);
console.log('Seu IMC é ' + imc.calc())

