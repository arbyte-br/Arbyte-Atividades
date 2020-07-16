// Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário se a xícara está cheia ou não.

let rs = require('readline-sync')
let pergunta = rs.question("A xícara está cheia?")

function estaCheio(cheia) {
    if (cheia.toUpperCase() === "Sim") {
    return true
    } else {
        return false
    }
}

let xicara = {cheia: estaCheio(pergunta), cor: "preta"}
console.log(xicara)

