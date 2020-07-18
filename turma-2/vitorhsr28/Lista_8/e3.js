const fs = require ('fs')

const json = fs.readFileSync ('carro.json')

const carro = JSON.parse(json)

console.log (carro)