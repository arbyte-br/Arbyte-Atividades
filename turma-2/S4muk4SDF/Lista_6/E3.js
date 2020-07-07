let rs = require("readline-sync")

let numeroRepeticoes = 5

let numeroPlayerA = []

let numeroPlayerB = []

let resultadoFinal = ""

let player1 = rs.question("Escolha o primeiro jogador: ")

    console.log("=====================================")

for (let i = 0; i < numeroRepeticoes; i++) {
    
    let numeros1 = rs.questionInt("Escolha um número de 1 a 10 (Faça isso 5 vezes, sem repetir os números): ")

    numeroPlayerA.push(numeros1)
}

    console.log("=====================================")

let player2 = rs.question("Escolha o segundo jogador: ")

for (let i = 0; i < numeroRepeticoes; i++) {
    
    let numeros2 = rs.questionInt("Escolha um número de 1 a 10 (Faça isso 5 vezes, sem repetir os números): ")

    numeroPlayerB.push(numeros2)
}

if (numeroPlayerA.includes(numeroPlayerB)) {

    console.log("a")
}