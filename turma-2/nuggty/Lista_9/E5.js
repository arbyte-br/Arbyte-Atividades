let user = require('readline-sync');
let ageCalculator = require('age-calculator');
let {AgeFromDate, AgeFromDateString} = require('age-calculator');

let dataNascimento = user.question('Insira sua data de nascimento AAAA/MM/DD: \n');
let usuarioAnos = new AgeFromDateString(dataNascimento).age;

console.log('Você tem '+ usuarioAnos +' anos.');