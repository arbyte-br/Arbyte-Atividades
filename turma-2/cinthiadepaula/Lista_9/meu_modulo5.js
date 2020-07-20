let rs =  require('readline-sync')

var moduloArbyte = function(){
    var ageCalculator = require('age-calculator');
  let {AgeFromDateString, AgeFromDate} = require('age-calculator');
    let dia = rs.questionInt('Qual o dia do seu aniversario: ');
    let mes = rs.questionInt('Qual o mes do seu aniversario: ');
    let ano = rs.questionInt('Qual o ano do seu aniversario: ');

    let ageFromDate = new AgeFromDate(new Date(ano, mes, dia)).age;
  console.log("sua idade é : ", ageFromDate, " anos");
}

exports.moduloArbyte = moduloArbyte