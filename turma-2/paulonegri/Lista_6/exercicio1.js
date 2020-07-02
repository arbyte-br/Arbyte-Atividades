//Faça um algoritmo que receba o nome de dois jogadores e após isso
//peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
//jogador B.
//Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
//iguais que o jogador A e B colocaram

let rs = require('readline-sync')
let tamanhoDaLista = 5
let jogadorA = rs.question('Escreva o nome do primeiro jogador: ')
let jogadorB = rs.question('Escreva o nome do segundo jogador: ')
console.clear()

let respostasJogadorA = []
for(let i = 0; i <tamanhoDaLista; i++){
    let respostaJogador = -1
    while (respostaJogador < 0 || respostaJogador > 10) {
        respostaJogador = rs.questionInt(`Insira um numero entre 0 a 10, ${jogadorA}: `)
    }
    respostasJogadorA.push(respostaJogador)
}
console.clear()

let respostasJogadorB = []
for(let i = 0; i <tamanhoDaLista; i++){
    let respostaJogador = -1
    while (respostaJogador < 0 || respostaJogador > 10) {
        respostaJogador = rs.questionInt(`Insira um numero entre 0 a 10, ${jogadorB}: `)
    }
    respostasJogadorB.push(respostaJogador)
}
console.clear()

let numerosRepetidos = []
for(let i = 0; i <tamanhoDaLista; i++){
let itensA = respostasJogadorA[i]
    for(let j = 0; j <tamanhoDaLista; j++){
        let itensB = respostasJogadorB[j]
        if(itensA === itensB){
            let numerosNaoEstaoInclusoNaLista = !numerosRepetidos.includes(itensA)
           if(numerosNaoEstaoInclusoNaLista){
               numerosRepetidos.push(itensA)
           }
        }

    }
}
console.log(`Estes são os número repetidos: ${numerosRepetidos.join(', ')}`)