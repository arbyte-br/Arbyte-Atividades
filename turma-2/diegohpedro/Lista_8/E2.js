// (OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário se a xícara está cheia ou não.

let rs = require('readline-sync')
let conteudo = rs.question('A xícara está cheia? (sim/não):')
let cor = rs.question('Insira a cor da xícara:')

let xicara = {
    cheia: conteudo,
    cor: cor
} 
console.log(xicara)