let ageCalculator = require('age-calculator');
let rs = require('readline-sync');
 
let dataNasc = rs.question('Insira sua data de nascimento no formato AAAA/MM/DD: ')
 
 
let ageFromString = new ageCalculator.AgeFromDateString(dataNasc).age;
 
console.log('Você tem ' +ageFromString + ' anos de idade.')
