//Faça um algoritmo que receba o nome de dois jogadores e após isso
//peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
//jogador B.
//Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
//que apenas o jogador A e B colocaram sem repetir nenhum número

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
let lista = []
for(let i = 0; i <tamanhoDaLista; i++){
    let itensA = respostasJogadorA[i]
    if(!lista.includes(itensA)){
        lista.push(itensA)
    }
}
for(let i = 0; i <tamanhoDaLista; i++){
    let itensB = respostasJogadorB[i]
    if(!lista.includes(itensB)){
        lista.push(itensB)
    }
}
console.log(`Esses foram todos os numeros escolhidos pelos jogadores ${lista}`)