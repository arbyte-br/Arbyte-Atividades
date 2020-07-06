let fs = require('fs')

let carro = fs.readFileSync('carro.json')

let carroDss = JSON.parse(carro)
console.log(carroDss)