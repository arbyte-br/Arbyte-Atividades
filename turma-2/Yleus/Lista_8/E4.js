let rs = require("readline-sync")

var carro = {
    marca : rs.question('Qual o nome da marca do carro?'),
    cor: rs.question('Qual a cor do carro?'),
    valor: rs.question('Qual o valor do carro?')
}


console.log(carro)