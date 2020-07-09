let rs = require('readline-sync')

let corDaXicara = rs.question('Qual a cor da xicara? \n')
let cheiaOuVazia = rs.question('A sua xicara está cheia ou vazia?\n Digite 1 para cheia, ou 2 para vazia.')
let xicara = new Object()
xicara.cheia = cheiaOuVazia
if(xicara.cheia == "cheia"){
    console.log('Legal, xicara cheia, ânimos em dia!')
}else{
    console.log('Hora de encher!')
}
xicara.cor = corDaXicara
    console.log(`A sua xicara é ${xicara.cor}`)
