let readline = require('readline-sync');
let ageCalculator = require ('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator');

let idade = readline.question('Insira a sua Data de Nascimento no formato a seguir AAAA-MM-DD: ');

let ageFromString = new AgeFromDateString(idade).age;
console.log(`Sua idade e: ${ageFromString} anos`);
