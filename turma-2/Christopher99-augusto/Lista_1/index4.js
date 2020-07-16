let readline = require("readline-sync")

console.log("Quantas maças você quer comprar? ")

let quantidade = readline.questionInt()

if (quantidade < 12) {
    
    let valor = 0.30
    
    let total = valor * quantidade
    
    console.log("O valor da compra é: ", total)

} else {
    
    let valor = 0.25
    
    let total = valor * quantidade

    console.log("O valor da compra é: ", total)
}