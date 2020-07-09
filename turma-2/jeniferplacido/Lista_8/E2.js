// (OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário se a xícara está cheia ou não

let rs = require ("readline-sync")

let xicara = new Object()

let pergunta = rs.question("A xícara está cheia ou vazia?")

xicara.cor = "branca"


console.log(xicara)
console.log(pergunta)