let rs = require('readline-sync')

let tamanho = rs.question('A xicara esta preenchida? \n')

let xicara = {
    cheia: tamanho,
    cor: 'Amarela',
}
console.log(xicara) 