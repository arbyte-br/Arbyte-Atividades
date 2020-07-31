// // 5. (OBRIGATÓRIO) Faça um algoritmo que receba a data nascimento de uma pessoa e
// // calcule sua idade.
// // Utilize o pacote : https://www.npmjs.com/package/age-calculator

const ageCalculator = require('age-calculator')
const rs = require('readline-sync')
let { AgeFromDateString, AgeFromDate } = require('age-calculator')

const day = rs.question('Informe seu dia de nascimento: ')
let month = rs.question('Informe seu mes de nascimento: ')
month - 1
const year = rs.question('Informe seu ano de nascimento: ')

let ageFromDate = new AgeFromDate(new Date(year, month, day)).age;
console.log("value from AgeFromDate", ageFromDate);

let ageFromString = new AgeFromDateString(`${year}-${month}-${day}`).age;
console.log("value from ageFromString", ageFromString);
