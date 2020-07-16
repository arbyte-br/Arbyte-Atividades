// Crie um programa que faça o mesmo do exercício anterior porém pergunte para o usuário se a xícara está cheia ou não. 

let rs = require("readline-sync")

let cheia = rs.question("A xicara está cheia ou não?\n")

let xicara = {
    cheia: cheia,
    cor: "Branca" 
}

console.log(xicara)