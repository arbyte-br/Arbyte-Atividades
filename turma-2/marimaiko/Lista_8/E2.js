// Adicione no programa anterior, após a impressão dos dados, a
// funcionalidade de salvar o objeto carro em formato JSON.
// Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os
// métodos da biblioteca ‘fs’ para salvar o arquivo.
// Salve o json como ‘carro.json’

const fs = require('fs')
let rs = require('readline-sync');

let carro ={}
// carro.cor= rs.question('Cor do carro: ');
// carro.modelo= rs.question('Modelo do carro: ');
// carro.marca= rs.question('Marca do carro: ');

carro.cor= 'marrom';
carro.modelo= 'fit';
carro.marca= 'honda';


let caminhoArquivo = 'carro.json';

let convertJson= JSON.stringify(carro);
fs.writeFileSync(caminhoArquivo, convertJson)