/* (OBRIGATÓRIO) Faça um algoritmo que receba o nome de dois jogadores e após isso
peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
que apenas o jogador A e B colocou sem repetir nenhum número
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3,4,5,7,8 */

let rs = require('readline-sync') 

let tamanhoDasListas = 5;

let nomeJogador1 = rs.question("Digite o nome do jogador 1: \n")

let nomeJogador2 = rs.question("Digite o nome do jogador 2: \n")

let listaJogador1 = [];

for (let i = 0; i < tamanhoDasListas; i++) {
    let respostaJogador = -1
    while (respostaJogador< 0 || respostaJogador > 10 ) {
    respostaJogador = rs.questionInt(`Digite um número entre 0 e 10, ${nomeJogador1} \n`)
    }
    listaJogador1.push(respostaJogador)
}

let listaJogador2 = [];

for (let i = 0; i < tamanhoDasListas; i++) {
    let respostaJogador = - 1
    while (respostaJogador < 0 || respostaJogador > 10 ) {
        respostaJogador = rs.questionInt(`Digite um número entre 0 e 10, ${nomeJogador2} \n`)
        }
        listaJogador2.push(respostaJogador)
}

let numerosRepetidos = []

for (let  i = 0; i < listaJogador1.length; i++) {
    let itemLista1 = listaJogador1[i]
    
    for (let j = 0; j < listaJogador2.length; j++) {
        let itemLista2 = listaJogador2[j]
        let achouNummeroRepetido = itemLista1 === itemLista2
        if (achouNummeroRepetido) {
            numerosRepetidos.push(listaJogador1[i])
        }
    }
}
console.log("Estes são os números repetidos: ", numerosRepetidos.join(', '))
