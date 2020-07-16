// Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada jogador. 
// Primeiro para o jogador A e depois para o jogador B. Após a escolha de cada jogador 
// o algoritmo deve apresentar quais foram os números que apenas o jogador A colocou diferente do B. 
//EX: Jogador A : 1, 2, 3, 4, 5 Jogador B : 1,2,3,8,7 - Algoritmo imprime: 4, 5
//Esse é um problema classicamente conhecido como Left Join.

let rs = require("readline-sync")

let jogador1 = rs.question("Digite o nome do Jogador 1: ")
let jogador2 = rs.question("Digite o nome do Jogador 2: ")

let listaJogador1 = []

let listaJogador2 = []

let numerosEscolhidos = 5

for (i = 0 ; i < numerosEscolhidos; i++) {
    let respostaJogador = -1
    while (respostaJogador < 0 || respostaJogador > 10) {
    respostaJogador = rs.question(`Digite um numero de 0 a 10 ${jogador1}: `)
}
    listaJogador1.push(respostaJogador)
}

console.clear()

for (i = 0 ; i < numerosEscolhidos; i++) {
    let = respostaJogador = -1
    while (respostaJogador < 0 || respostaJogador > 10) {
    respostaJogador = rs.question(`Digite um numero de 0 a 10 ${jogador2}: `)
}
    listaJogador2.push(respostaJogador)
}

console.clear()

console.log(`${jogador1} digitou: ${listaJogador1} | ${jogador2} digitou: ${listaJogador2}`)

let numerosDiferentes = []

for (let i = 0; i < numerosEscolhidos; i++) {    
    let itemLista1 = listaJogador1[i]
    
    if (!listaJogador2.includes(itemLista1)) {
        numerosDiferentes.push(itemLista1)
    }
                                                  
}        

console.log('Estes são os números diferentes digitados pelo jogador 1: ', numerosDiferentes.join(', '))

