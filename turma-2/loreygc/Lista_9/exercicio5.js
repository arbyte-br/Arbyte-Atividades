let rs = rs.require('readline-sync');
let ageCalculator = require ('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator');

let idade = rs.question('Insira a sua data de nascimento no formato a seguir AAAA-MM-DD: ');

let ageFromString = new AgeFromDateString(idade).age;
console.log(`Sua idade é: ${ageFromString} anos`);