// (OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário a marca, cor e o valor do carro.

var rs = require('readline-sync')

var carro = {}


var carroMarca = rs.question("Digite uma marca de um carro: ")
var carroCor = rs.question("Digite uma cor de um carro: ")
var carroValor = rs.question("Digite um valor de um carro: ")

carro.itensEscolhidos = [carroMarca, carroCor, carroValor]

console.log(carro)
