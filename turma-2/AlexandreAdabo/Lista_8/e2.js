let rs = require('readline-sync')
let cor = 'branca'
let cheia = rs.question('A xicara esta cheia ? ').toLowerCase()

let xicara = {cheia: cheia, cor: cor }
console.log(xicara)