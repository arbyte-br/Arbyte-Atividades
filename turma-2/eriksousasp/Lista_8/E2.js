let fs = require('fs')
let rs = require('readline-sync')

let carro = {
    marca: rs.question('Marca: '),
    modelo: rs.question('Modelo: '),
    ano: rs.questionInt('Ano: ')
}

let carroJsonCaminho = 'carro.json'
let carroString = JSON.stringify(carro)
fs.writeFileSync(carroJsonCaminho, carroString)

console.log(carroString)