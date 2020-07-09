let FasamImc = require('fasam-imc-calc');
 
let imc = new FasamImc(100, 1.94)
 
let imcTotal = imc.calc()

console.log(imcTotal)