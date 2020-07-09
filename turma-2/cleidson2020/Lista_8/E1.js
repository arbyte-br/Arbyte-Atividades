var rs = require('readline-sync');

let marca = rs.question('Qual marca do carro \n >> ');
let cor = rs.question('Qual a cor do carro? \n >> ');
let modelo = rs.question('Qual o modelo do carro \n >>');

let carro = {
    mercaCarro: marca,
    corCarro: cor,
    modeloCarro: modelo
};


console.log(`A marca é ${carro.mercaCarro}`);
console.log(`A cor é ${carro.corCarro}`);
console.log(`O modelo é ${carro.modeloCarro}`);

