// (OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário se a xícara está cheia ou não.

let rs = require('readline-sync')

let xicaraCheia = rs.question('A xicara esta cheia ? ')

let xicara = {
    cheia: xicaraCheia,
    cor: 'Vermelha'
}

console.log(xicara)