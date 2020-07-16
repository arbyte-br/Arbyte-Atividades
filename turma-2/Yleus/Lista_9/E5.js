let rs = require ("readline-sync")
let {AgeFromDateString, AgeFromDate} = require('age-calculator');

let dataAno = rs.question("Digite o ano de seu nascimento\n>>")
let dataMes = rs.question("Digite o mes de seu nascimento, note que 0 e janeiro e 11 e dezembro\n>>")
let dataDia = rs.question("Digite o dia de seu de nascimento\n>>")

let idade = new AgeFromDate(new Date(dataAno, dataMes, dataDia)).age;

console.log("Voce tem " +idade +" anos")