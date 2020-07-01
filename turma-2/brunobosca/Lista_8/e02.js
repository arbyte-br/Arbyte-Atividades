let fs = require('fs')
let carro = {}
carro.cor = 'vermelho'
carro.modelo = 'corsa'
carro.marca = 'chevrolet'

let caminhoArquivo = 'carro.json'

let convertToJson = JSON.stringify(carro);
fs.writeFileSync(caminhoArquivo, convertToJson);