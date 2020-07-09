const ageCalculator = require('age-calculator');
const rs = require('readline-sync');

  let {AgeFromDateString, AgeFromDate} = require('age-calculator');
 
  // Be careful: Javascript months start at 0 (so zero stands for january)
 
//   let date=rs.question('Informe a data do seu nascimento (aaaa-mm-dd): ')
let ano =rs.questionInt('Informe o ano que você nasceu: ')
let mes =rs.questionInt('Informe o mês que você nasceu: ')
let dia =rs.questionInt('Informe o dia que você nasceu: ')

  let ageFromDate = new AgeFromDate(new Date(ano,mes,dia)).age;
  console.log("value from AgeFromDate", ageFromDate);
 
//   let ageFromString = new AgeFromDateString(date).age;
//   console.log("value from ageFromString", ageFromString);
//   // output: 30 (at the time of this doc)