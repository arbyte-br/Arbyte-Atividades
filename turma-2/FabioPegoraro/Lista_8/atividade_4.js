// Crie um programa que faça o mesmo do exercício anterior porém pergunte para o usuário a marca, cor e o valor do carro. 

let rs = require("readline-sync")

let marca = rs.question("Qual a marca do carro\n")
let cor = rs.question("Qual a marca do carro\n")
let valor = rs.question("Qual a marca do carro\n")

let carro = {
    marca: marca,
    cor: cor,
    valor: valor,
}


console.log(carro)