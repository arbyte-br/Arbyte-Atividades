// (OBRIGATÓRIO) Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// que apenas o jogador A colocou diferente do B.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// Esse é um problema classicamente conhecido como Left Join

let rs = require ('readline-sync')

let playerA = rs.question ('Qual o nome do primeiro jogador? \n')
let playerB = rs.question ('Qual o nome do segundo jogador? \n')

let listaTamanho = 5

let listaPlayerA = []
let listaPlayerB = []

console.log ('- Primeiro jogador, digite 5 números de 1 a 10 -')

for (let i = 1; i <= listaTamanho; i++){
    let respostaPlayerA = rs.questionInt(`Número ${i} : `)
    if (respostaPlayerA > 0 && respostaPlayerA <= 10){
        listaPlayerA.push(respostaPlayerA)
    }else{
        console.log ('Número não é entre 1 e 10.')
        i--
    }

    }

console.log ('- Segundo jogador, digite 5 números de 1 a 10 -')
for (let i = 1; i <= listaTamanho; i++){
    let respostaPlayerB = rs.questionInt(`Número ${i} : `)
    if (respostaPlayerB > 0 && respostaPlayerB <= 10){
        listaPlayerB.push(respostaPlayerB)
    }else{
        console.log ('Número não é entre 1 e 10.')
        i--
    }
}

let numerosDiferentes = []

console.log (` ${playerA} digitou: ${listaPlayerA} || ${playerB} digitou : ${listaPlayerB}`)

for (let i = 0; i < listaPlayerA.length; i++){
     if  (!listaPlayerB.includes(listaPlayerA[i])){
        numerosDiferentes.push(listaPlayerA[i])
     }
}
console.log(`Os número que ${playerA} colocou de diferente de ${playerB} são: ${numerosDiferentes}.`)
