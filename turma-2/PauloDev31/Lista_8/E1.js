let rs = require('readline-sync')

let corDaXicara = rs.question('Qual a cor da xicara? \n')
let xicara = new Object()
xicara.cheia = true
xicara.cor = corDaXicara
    console.log(`A sua xicara é ${xicara.cor}`)
    console.log(`xicara cheia? ${xicara.cheia}`)