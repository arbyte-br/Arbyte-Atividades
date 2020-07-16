let rs = require('readline-sync')

let nomeJogador1 = rs.question('Digite o nome do jogador 1: ')
let nomeJogador2 = rs.question('Digite o nome do jogador 2: ')

let listaJogador1 = []
let listaJogador2 = []
let listaJogador = []

for (let i = 0; i < 5; i++) {
    let respostaJogador = rs.questionInt(`Digite um numero para o ${nomeJogador1} `)

    if (respostaJogador < 0 || respostaJogador > 10) {
        respostaJogador = rs.questionInt('POR FAVOR digite um numero maior que 0 e menor que 10 ')
    }

    listaJogador.push(respostaJogador)
    listaJogador1.push(respostaJogador)

}



for (let i = 0; i < 5; i++) {
    let respostaJogador2 = rs.questionInt(`Digite um numero para o ${nomeJogador2} `)
    listaJogador.push(respostaJogador2)
    listaJogador2.push(respostaJogador2)


}

let numerosDiferentes = listaJogador2.filter(function(elem, j, array){
    return array.indexOf(elem) === j
})

console.log(numerosDiferentes)
