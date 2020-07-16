 
// 2.(OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém 
// pergunte para o usuário se a xícara está cheia ou não. 

let rs = require("readline-sync")

let xicara = new Object()

xicara.cor = "Branca"
xicara.cheia = rs.question("A xícara está cheia? True/False \n")

console.log(xicara)