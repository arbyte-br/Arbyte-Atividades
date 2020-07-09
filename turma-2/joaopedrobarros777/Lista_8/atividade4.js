let rs = require ("readline-sync")

let marca = rs.question("Qual a marca do carro?")

let cor = rs.question("Qual eh a cor do carro?")

let valor = rs.question("quanto custa?")

let carro = {marca: marca, cor: cor, valor: valor}

console.log(carro)