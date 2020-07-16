let {AgeFromDate, AgeFromDateString} = require('age-calculator')
let rs = require('readline-sync')

let dia = rs.questionInt('Qual dia de seu nascimento? ')
let mes = rs.questionInt('Qual mes de seu nascimento? ')
let ano = rs.questionInt('Qual ano de seu nascimento? ')

let ageFromDate = new AgeFromDate(new Date(ano, mes+1, dia)).age
  console.log(`Idade: ${ageFromDate}`)
console.log('======================================')
  //ou se quiser perguntar a data numa string so:
let nascimento = rs.question('Digite sua data de nascimento (mm-dd-AAAA): ')

let ageFromDateString = new AgeFromDateString(new Date(nascimento)).age
  console.log(`Idade: ${ageFromDateString}`)
