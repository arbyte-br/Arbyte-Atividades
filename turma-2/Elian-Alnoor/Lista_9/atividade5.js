let rs = require("readline-sync")

let dia = rs.questionInt("Informe o dia do mês em que nasceu em números DD:\n")

let mes = rs.questionInt("Informe o mês em que nasceu em números MM:\n")
mes = mes - 1

let ano = rs.questionInt("Informe o ano do seu nascimento em números AAAA:\n")

let ageCalculator = require('age-calculator');
  let {AgeFromDateString, AgeFromDate} = require('age-calculator');
 
  // Be careful: Javascript months start at 0 (so zero stands for january)
 
  let ageFromDate = new AgeFromDate(new Date(ano, mes, dia)).age;
  console.log("sua idade é", ageFromDate);
  // output: 30 (at the time of this doc)
 
  let ageFromString = new AgeFromDateString(`${ano}-${mes+1}-${dia}`).age;
  console.log("value from ageFromString", ageFromString);
  // output: 30 (at the time of this doc)