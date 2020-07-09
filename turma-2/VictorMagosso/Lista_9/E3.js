let isImpar = require('is-odd')
let rs = require('readline-sync')

let numero = rs.questionInt('Digite um numero para verificar se e par ou impar: ')

if (isImpar(numero)){
    return console.log("Impar")
}else{
    return console.log("Par")
}