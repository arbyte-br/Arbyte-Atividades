/*(OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém
pergunte para o usuário se a xícara está cheia ou não.*/

let rs = require ("readline-sync")

let conteudo = rs.question('A xicara está cheia? (Sim ou Não): \n')
let cor = rs.question('Insira a Cor da Xicara: \n')

let xicara = {
    cheia: conteudo,
    cor: cor
}

console.log(xicara)