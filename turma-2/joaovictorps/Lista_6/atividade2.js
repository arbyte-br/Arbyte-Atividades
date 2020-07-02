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
let diferentes = []
let iguais = []
for(let i = 0; i < listaJogador1.length; i++){
    if(!listaJogador2.includes(listaJogador1[i])) {
        if(!diferentes.includes(listaJogador1[i])){
        diferentes.push(listaJogador1[i])
        }
    }
}
console.log('Estes são os números diferentes: ', diferentes.join(', '))