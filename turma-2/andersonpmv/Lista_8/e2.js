let fileSystem = require('fs');

let carro = {};
carro.modelo = 'Gol';
carro.cor = 'Prata';
carro.marca = 'Volkswagem';

let caminhoArquivo = 'carro.json';

let converteToJson = JSON.stringify(carro);
fileSystem.writeFileSync(caminhoArquivo, converteToJson);


let arquivoJson = fileSystem.readFileSync('carro.json');
let carroJson = JSON.parse(arquivoJson);

console.log(carroJson);