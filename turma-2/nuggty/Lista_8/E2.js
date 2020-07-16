let fs = require('fs');

let user = require('readline-sync');

let carro = {
    marca: user.question('Marca: '),
    modelo: user.question('Modelo:'),
    ano: user.question('Cor: ')
};

let carroJasonCaminho = 'carro.json';
let carroString = JSON.stringify(carro);
fs.writeFileSync(carroJasonCaminho, carroString);

console.log(carroString);