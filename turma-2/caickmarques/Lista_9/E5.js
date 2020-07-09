let { AgeFromDateString } = require('age-calculator');
let rs = require('readline-sync');

let dataNasc = rs.question('Informa sua data de nascimento no formado (aaaa-mm-dd): ');

let idadeData = new AgeFromDateString(dataNasc).age;

console.log(`Sua idade é ${idadeData} anos`);