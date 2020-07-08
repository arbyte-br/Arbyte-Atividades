let readline = require('readline-sync');
let fs = require('fs');

let carro= {
marca: readline.question('Marca: '),
modelo: readline.question('Modelo: '),
ano: readline.questionInt('Ano: '),
};

let carroJsonCaminho = 'carro.json'
let carroString = JSON.stringfy(carro)
fs.writeFileSync(carroJsonCaminho, carroString)

console.log(carroString);