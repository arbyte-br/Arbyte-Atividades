let fs = require('fs')

let carro = fs.readFileSync('carro.json')

let carroDes = JSON.parse(carro)
console.log(carroDes)