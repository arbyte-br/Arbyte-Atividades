// (OBRIGATÓRIO) Faça um algoritmo que receba a data nascimento de uma pessoa e
// calcule sua idade.
// Utilize o pacote : https://www.npmjs.com/package/age-calculator
let rs = require('readline-sync')

let {AgeFromDateString} = require('age-calculator')

let dataNasc = rs.question('Qual sua data de nascimento? (DD/MM/AAAA): ').split('/')

  let diaUser = dataNasc[0]
  let mesUser = dataNasc[1]
  let anoUser = dataNasc[2]

  let ageFromString = new AgeFromDateString(`${anoUser}-${mesUser}-${diaUser}`).age;
  console.log(`Você tem ${ageFromString} anos.`)
