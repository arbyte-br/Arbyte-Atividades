const FasamImc = require('fasam-imc-calc');

const imc = new FasamImc(85, 1.76);

console.log(imc.calc());