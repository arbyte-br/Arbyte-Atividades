const rs = require('readline-sync');
const FasamImc = require('fasam-imc-calc');
 
let peso=rs.questionFloat('Informe seu peso: ')
let alt=rs.questionFloat('Informe sua altura: ')

let imc = new FasamImc(peso,alt);
 
console.log(imc.calc());
