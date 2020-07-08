// (OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário se a xícara está cheia ou não.
let rs = require('readline-sync')

let conteudo = rs.question('A xícara está cheia? (responda "sim" ou "não") \n')

let xicara = {
    cheia: conteudo,
    cor: 'branca',
}
console.log(xicara)