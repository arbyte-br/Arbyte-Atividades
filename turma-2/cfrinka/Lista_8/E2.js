let fs = require('fs');
let rs = require('readline-sync');

let carro = {};
carro.cor = rs.question('Insira a cor do seu carro: ');
carro.modelo = rs.question('Insira o modelo do seu carro: ');
carro.marca = rs.question('Insira a marca do seu carro: ');

console.log(carro)

let caminhoArquivo = 'carro.json'
let convertToJson = JSON.stringify(carro);
fs.writeFileSync(caminhoArquivo, convertToJson);