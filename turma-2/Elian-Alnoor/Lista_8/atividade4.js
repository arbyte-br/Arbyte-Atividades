// (OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém 
// pergunte para o usuário a marca, cor e o valor do carro. 
let rs = require("readline-sync")

let carro = new Object()

carro.marca = rs.question("Informe a marca do carro: \n")
carro.cor = rs.question("Informe a cor do carro: \n")
carro.valor = rs.questionInt("Informe o valor do carro: \n")
carro.valor = (`R$ ${carro.valor}`)

console.log(carro)