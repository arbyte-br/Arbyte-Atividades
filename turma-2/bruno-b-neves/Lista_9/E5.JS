const rs = require('readline-sync');
const ageCalculator = require('age-calculator');

let userDate= rs.question('Insira sua data de nascimento: AAAA/MM/DD : ');
let ageFromString = new ageCalculator.AgeFromDateString(userDate).age

console.log(ageFromString)
