//(OBRIGATÓRIO) ​ Faça um algoritmo que receba o nome de dois jogadores e após isso
//peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
//jogador B.
//Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
//iguais que o jogador A e B colocaram.
//EX: 
//Jogador A : 1, 2, 3, 4, 5
//Jogador B : 1,2,3,8,7
//Algoritmo imprime :
//1,2,3
//Esse é um problema classicamente conhecido como Inner Join

let rs = require('readline-sync')

let nomeJogador1 = rs.question('Digite o nome do jogador 1: ')
let nomeJogador2 = rs.question('Digite o nome do jogador 2: ')

let listaJogador1 = []

for (let i = 0; i < 5; i++) {
    let respostaJogador = rs.questionInt(`Digite um numero para o ${nomeJogador1} `)

    if (respostaJogador < 0 || respostaJogador > 10) {
        respostaJogador = rs.questionInt('POR FAVOR digite um numero maior que 0 e menor que 10 ')
    }

    listaJogador1.push(respostaJogador)

}

let listaJogador2 = []

for (let i = 0; i < 5; i++) {
    let respostaJogador2 = rs.questionInt(`Digite um numero para o ${nomeJogador2} `)
    listaJogador2.push(respostaJogador2)

}


let numeroRepetidos = []

for (let i = 0; i < listaJogador1.length; i++) {


    for (j = 0; j < listaJogador2.length; j++) {
        let achouNumeroRepetido = listaJogador1[i] === listaJogador2[j]

        if (achouNumeroRepetido) {
            numeroRepetidos.push(listaJogador1[i])

        }

    }

}

console.log(`Esses são os numeros repetidos ${numeroRepetidos.join(', ')}`)