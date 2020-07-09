const FasamImc = require('fasam-imc-calc');
const rs = require('readline-sync')

const imc = new FasamImc();

console.log('\n \n')
console.log('Bem Vindo Ao Calculo de IMC!')
console.log('Insira Seu peso, EX: 120.')
console.log('Insira Sua aultura, EX: 1.20 Usando . Como separador. \n \n')


const perguntaPeso = rs.questionInt('Insira seu Peso \n >');
const perguntaAltura = rs.questionFloat('Insira sua Altura \n >');


const newLocal = imc.calc(perguntaPeso, perguntaAltura);
let consulta = newLocal;

console.log(`Seu imc: ${consulta} `)
