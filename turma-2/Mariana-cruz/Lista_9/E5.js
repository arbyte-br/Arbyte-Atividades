// // 5. (OBRIGATÓRIO) Faça um algoritmo que receba a data nascimento de uma pessoa e
// // calcule sua idade.
// // Utilize o pacote : https://www.npmjs.com/package/age-calculator

var ageCalculator = require('age-calculator');
let rs = require('readline-sync');

let {AgeFromDate} = require('age-calculator');

console.log("Qual sua data de nascimento?");
console.log('Por favor, insira no formato: AAAA/MM/DD');

let dataNascimento =new AgeFromDate (new Date(rs.question(''))).age

console.log('Sua idade é: ' + dataNascimento);
