let rs = require("readline-sync");

var quantidade = readline.questionInt('Quantas maças você quer comprar? ')

if (quantidade < 12) {
    var valor = 0.30
    var total = valor * quantidade
    console.log('O valor total da compra é: ', total)
} else {
    var valor = 0.25
    var total = valor * quantidade
    console.log('O valor total da compra é: ', total)
}