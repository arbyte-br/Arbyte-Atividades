let rs = require('readline-sync')

let tamanhoDasListas = 5

let nomeJogador1 = rs.question('Digite o nome do jogador 1: ')

let nomeJogador2 = rs.question('Digite o nome do jogador 2: ')

console.clear()

let listaJogador1 = []

for (let i = 0; i < tamanhoDasListas; i++) {
    let respostaJogador = -1    
    while (respostaJogador < 0 || respostaJogador > 10) {
        respostaJogador = rs.questionInt(`Digite um número entre 0 e 10, ${nomeJogador1}: `)
    }
    listaJogador1.push(respostaJogador)
}

console.clear()

let listaJogador2 = []

for (let i = 0; i < tamanhoDasListas; i++) {
    let respostaJogador = -1    
    while (respostaJogador < 0 || respostaJogador > 10) {
        respostaJogador = rs.questionInt(`Digite um número entre 0 e 10, ${nomeJogador2}: `)
    }
    listaJogador2.push(respostaJogador)
}

console.clear()                                      

let numerosRepetidos = []

for(let i = 0; i < tamanhoDasListas; i++) {    
    let itemLista1 = listaJogador1[i]
    for(let j = 0; j < tamanhoDasListas; j++) {
        let itemLista2 = listaJogador2[j]
        let achouNumeroRepetido = itemLista1 === itemLista2
        if (achouNumeroRepetido) {
            let numeroNaoEstaInclusoNaLista = !numerosRepetidos.includes(itemLista1)
            if (numeroNaoEstaInclusoNaLista) {
                numerosRepetidos.push(itemLista1)
            }
        }
    }                                                   
}        

console.log('Estes são os número repetidos: ', numerosRepetidos.join(', '))