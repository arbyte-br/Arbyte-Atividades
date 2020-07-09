let rs=require('readline-sync')

let marca= rs.question('Qual marca de carro?')
let cor= rs.question('Qual Cor?')
let valor= rs.question('Qual valor?')

let carro={marca: marca, cor: cor, valor: valor }

console.log(carro)