// (OBRIGATÓRIO) Faça um algoritmo que receba peso e altura do usuário e calcule o
// IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc

// const imc = new FasamImc(80, 1.80); // peso, altura
 
// imc.calc();


const FasamImc = require('fasam-imc-calc');
let rs = require('readline-sync') 

let peso = rs.questionFloat("Digite seu peso: \n")
let altura = rs.questionFloat('Digite sua altura: \n')

const imc = new FasamImc(peso, altura); // peso, altura
 
console.log('Seu IMC é: ' + imc.calc())
