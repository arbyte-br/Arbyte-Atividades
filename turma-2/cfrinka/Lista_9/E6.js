// estou usando o exercício 5 dessa mesma lista 9

let ageCalculator = require('age-calculator');
let rs = require('readline-sync');
let chalk = require('chalk')
 
let dataNasc = rs.question('Insira sua data de nascimento no formato AAAA/MM/DD: ')
 
 
let ageFromString = new ageCalculator.AgeFromDateString(dataNasc).age;
 
console.log(chalk.blue('Você tem ' +ageFromString + ' anos de idade.'))
