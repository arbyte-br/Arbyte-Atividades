let rs = require("readline-sync")

let perguntaMarca = rs.question("Qual a marca do carro? \n")
let perguntaModelo = rs.question("Qual o modelo do carro? \n")
let perguntaCor = rs.question("Qual a cor do carro? \n")
let perguntaPreco = rs.question("Qual o preço do carro? \n")


let carro = {
    marca: perguntaMarca,
    modelo: perguntaModelo,
    cor: perguntaCor,
    preco: "R$" + perguntaPreco,
}

console.log(carro)