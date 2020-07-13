/*Crie um programa que faça o mesmo do exercício anterior porém
pergunte para o usuário se a xícara está cheia ou não.*/

let rs = require(`readline-sync`)
let xicara = {}
xicara.cheia = rs.question(`A xicara esta cheia?\n`)
xicara.cor = "Preta"

console.log(xicara)