let fs = require('fs');

let arquivoJson = fs.readFileSync('carro.json');

let carro = JSON.parse(arquivoJson);

console.log(carro);