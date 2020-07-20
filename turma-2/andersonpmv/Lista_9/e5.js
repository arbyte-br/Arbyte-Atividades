let idade = require('age-calculator');
let {calcIdade} = require('age-calculator');

let rs = require('readline-sync');

let ano = rs.questionInt('Insira o ano? AAAA: ');
let mes = rs.questionInt('Insira o mes? MM: ');
let dia = rs.questionInt('Insira o dia? DD: ');

let calcIdade = new calcIdade(new Date(ano, mes, dia));

console.log(calcIdade);