let fileSystem = require('fs');

let arquivoJson = fileSystem.readFileSync('carro.json');
let stringToObj = JSON.parse(arquivoJson);

console.log(stringToObj);