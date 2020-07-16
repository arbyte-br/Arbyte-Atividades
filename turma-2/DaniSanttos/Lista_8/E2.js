let rs = require('readline-sync')

let xicara = {
    cheia: null,
    cor: 'branca'
}

xicara.cheia = rs.question('A xicara está cheia? ')

console.log(xicara.cheia)
