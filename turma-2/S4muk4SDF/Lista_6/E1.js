let rs = require("readline-sync")

let numeroRepeticoes = 5

let numeroPlayerA = []

let numeroPlayerB = []


let player1 = rs.question("Escolha o primeiro jogador: ")


    console.log("=====================================")


for (let i = 0; i < numeroRepeticoes; i++) {

    let respostaJogador = -1

    while (respostaJogador < 0 || respostaJogador > 10) {
        numeros1 = rs.questionInt(`Digite um número entre 0 e 10, ${player1}: `)
    }

    numeroPlayerA.push(numeros1)
}

    console.log("=====================================")


let player2 = rs.question("Escolha o segundo jogador: ")


    console.log("=====================================")


for (let i = 0; i < numeroRepeticoes; i++) {

    let respostaJogador = -1
    
    while (respostaJogador < 0 || respostaJogador > 10) {
        numeros2 = rs.questionInt(`Digite um número entre 0 e 10, ${player2}: `)
    }

    numeroPlayerB.push(numeros2)
} 


let numerosRepetidos = []


for(let i = 0; i < numeroRepeticoes; i++) {    
    let itemLista1 = numeroPlayerA[i]

    for(let j = 0; j < numeroRepeticoes; j++) {
        let itemLista2 = numeroPlayerB[j]
        let achouNumeroRepetido = itemLista1 === itemLista2

        if (achouNumeroRepetido) {
            let numeroNaoEstaInclusoNaLista = !numerosRepetidos.includes(itemLista1)

            if (numeroNaoEstaInclusoNaLista) {
                numerosRepetidos.push(itemLista1)
            }
        }
    }                                                   
}     

    
    console.log("=====================================")


console.log('Estes são os número repetidos: ', numerosRepetidos.join(', '))

// Ta dando algum erro e preciso ver

