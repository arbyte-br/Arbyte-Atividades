// BIBLIOTECA 'FILE-SYSTEM'
const fs = require('fs');
// Vamos ler o arquivo "carro.json"
let arquivoJson = fs.readFileSync('carro.json');

let carro = JSON.parse(arquivoJson)

console.log(carro)