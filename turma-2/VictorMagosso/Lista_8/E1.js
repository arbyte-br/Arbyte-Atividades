let rs = require('readline-sync')

let carro = {
    marca: rs.question('Marca: '),
    modelo: rs.question('Modelo: '),
    ano: rs.questionInt('Ano: ')
}

console.log(carro)