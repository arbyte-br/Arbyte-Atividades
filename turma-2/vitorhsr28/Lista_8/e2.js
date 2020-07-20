const fs = require ('fs')
const rs = require('readline-sync')

let carro ={}

carro.cor= rs.question ('Informe a cor do carro: ');
carro.modelo= rs.question ('Informe o modelo do carro: ');
carro.marca= rs.question ('Informe a marca do carro: ');

let json = 'carro.json'

let converterJson = JSON.stringify(carro)
fs.writeFileSync (json, converterJson)