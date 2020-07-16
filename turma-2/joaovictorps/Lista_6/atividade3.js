let rs = require('readline-sync')

let tamanhoDasListas = 5

let nome1 = rs.question('Digite o nome do jogador 1: ')
let nome2 = rs.question('Digite o nome do jogardor 2: ')

let listaJogador1 = []
for(let i = 0; i < tamanhoDasListas;i++) {
    let respostaJogador = -1

    while (respostaJogador <0 || respostaJogador >=10 ) {
        respostaJogador = rs.questionInt(`Digite um número entre 0 e 10, ${nome1}: `)   

    }
    listaJogador1.push(respostaJogador)
}

let listaJogador2 = []
for(let i = 0; i < tamanhoDasListas;i++) {
    let respostaJogador = -1

    while (respostaJogador <0 || respostaJogador >=10 ) {
        respostaJogador = rs.questionInt(`Digite um número entre 0 e 10, ${nome2}: `)   

    }
    listaJogador2.push(respostaJogador)
}
let numerosDigitados = []
for(let i = 0; i < listaJogador1.length; i++){
    if(!numerosDigitados.includes(listaJogador1[i])){
        numerosDigitados.push(listaJogador1[i])
    }
}
for( let j = 0; j < listaJogador2.length;j++){
        if(!numerosDigitados.includes(listaJogador2[j])){
            numerosDigitados.push(listaJogador2[j])
        }
}

console.log('Estes são os números digitados em ordem numérica: ', numerosDigitados.sort().join(', '))