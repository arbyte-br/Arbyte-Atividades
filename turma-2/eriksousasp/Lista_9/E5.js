let ageCalculator = require('age-calculator');
let rs = require('readline-sync');

let dataNasc = rs.question('Digite sua data de nascimento da seguinte forma AAAA/MM/DD: ')


let ageFromString = new ageCalculator.AgeFromDateString(dataNasc).age;

console.log('Você tem ' + ageFromString + ' anos de idade.')