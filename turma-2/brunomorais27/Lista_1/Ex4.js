let rs = require('readline-sync')

let macas = rs.questionInt ('Quantas macas deseja comprar? \n')

if (macas < 12 ){
    precoMacas = macas * 0.30
    console.log (`Você deverá pagar R$${precoMacas} por ${macas} maçãs.`)
}else if (macas >= 12 ){
    precoMacas = macas * 0.25
    console.log (`Você deverá pagar R$${precoMacas} por ${macas} maçãs.`)
}