var ageCalculator = require('age-calculator');
  let {AgeFromDateString, AgeFromDate} = require('age-calculator');
  let rs= require ('readline-sync')
   let ano = rs.questionInt('Qual ano voce nasceu ? ')
   let mes = rs.questionInt('Qual mes voce nasceu ? ')
   let dia = rs.questionInt('Qual dia voce nasceu ? ')

  let ageFromDate = new AgeFromDate(new Date(ano, mes, dia)).age;
  console.log("value from AgeFromDate", ageFromDate);

  let idade = rs.question('digite sua idade: ').split('/')
  let dia1 = idade[0]
  let mes1 = idade[1]
  let ano1 = idade[2]
  console.log(dia1,'/',mes1,'/',ano1)