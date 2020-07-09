let rs = require('readline-sync')
let marca = rs.question('Qual a marca do carro ? ')
let cor = rs.question('Qual a cor do seu carro ? ')
let valor = rs.question('Qual o valor do seu carro ? ')

let carro = {marca, cor, valor}

console.log(carro)