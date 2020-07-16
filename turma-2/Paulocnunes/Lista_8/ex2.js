//Crie um programa que faça o mesmo do exercício anterior porém pergunte para o usuário se a xícara está cheia ou não

let rs = require('readline-sync')

let pergunta = rs.question('A xícara está cheia? responda com sim ou não: \n')

function xicaraCheia (cheia) {
    if (cheia === 'sim') {
    return true
} else {
    return false
}
}

let xicara = {cheia: xicaraCheia(pergunta), cor: 'preto'}
console.log(xicara)