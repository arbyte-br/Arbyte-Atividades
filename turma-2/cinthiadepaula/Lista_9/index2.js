let rs = require('readline-sync')
const FasamImc = require('fasam-imc-calc');
 

const imc = new FasamImc(80, 1.80); // peso, altura
 
imc.calc();