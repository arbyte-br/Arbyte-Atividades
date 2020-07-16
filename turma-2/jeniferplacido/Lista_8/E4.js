// Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário a marca, cor e o valor do carro

let rs = require ("readline-sync")

let carro = new Object()

let marca = rs.question("Qual a marca do carro?")
let cor = rs.question("Qual a cor do carro?")
let valor = rs.questionFloat("Qual o valor do carro?")


console.log(valor)
console.log (marca)
console.log(cor)




