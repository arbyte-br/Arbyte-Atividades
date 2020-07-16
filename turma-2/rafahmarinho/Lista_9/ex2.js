// (OBRIGATÓRIO) Faça um algoritmo que receba peso e altura do usuário e calcule o
// IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc
let rs = require('readline-sync')

const FasamImc = require('fasam-imc-calc');

let peso = rs.questionInt('Qual o seu peso em KG? (ex:75) \n')
let altura = rs.questionFloat('Qual a sua altura? (ex:1.83) \n')

let validacao = (peso > 0 && peso < 250) && (altura > 0.03 && altura < 2.50)

if(validacao){
    const imc = new FasamImc(peso, altura);
    console.log(`Seu IMC é ${imc.calc()}.`)
} else {
    console.log(`Seu peso ou altura são inválidos.`)
}