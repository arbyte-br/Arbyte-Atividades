// 2. (OBRIGATÓRIO) Faça um algoritmo que receba peso e altura do usuário e calcule o
// IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc

const rs = require('readline-sync')
const FasamImc = require('fasam-imc-calc')

const peso = rs.questionFloat('Informe seu peso: ')
const altura = rs.questionFloat('Informe sua altura: ')

const imc = new FasamImc(peso, altura);

console.log(imc.calc())