let rs = require('readline-sync')

let cor = rs.question('Qual a cor da xicara ? \n >')
let cheia = rs.question('A xicara está cheia ou vazia ? (Responda com s ou n) \n >')
if (cheia === 's') {
    cheia = true
    } else {
    cheia = false
}

let xicara = {
    cor,
    cheia
}

console.log(xicara.cheia ? `A xicara é ${xicara.cor} e está cheia`: `A xicara é ${xicara.cor} e está vazia.`)