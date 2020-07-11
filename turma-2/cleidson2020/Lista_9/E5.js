let rs = require('readline-sync')
var ageCalculator = require('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator');

let pergunta = rs.question('Insira sua data de nascimento EX: 1987-01-08 \n >> ');

let ageFromString = new AgeFromDateString(pergunta).age;
console.log("Sua Idade Atual >>", ageFromString); 


/* let ageFromDate = new AgeFromDate(new Date(pergunta)).age;
console.log("value from AgeFromDate", ageFromDate); */