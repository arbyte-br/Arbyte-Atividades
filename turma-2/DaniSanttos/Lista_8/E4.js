let rs = require('readline-sync')

let carro = {
    marca: null,
    cor: null,
    valor: null,
}

carro.marca = rs.question('Qual a marca que você deseja? ')
carro.cor = rs.question('Qual a cor que você deseja? ')
carro.valor = rs.question('Até quanto você deseja pagar? ')

console.log(carro)