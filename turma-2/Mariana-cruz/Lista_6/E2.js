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

let jogadorA = rs.question ('Qual o nome do primeiro jogador? \n')
let jogadorB = rs.question ('Qual o nome do segundo jogador? \n')

let listaTamanho = 5

let listaJogadorA = []
let listaJogadorB = []

console.log ('Primeiro jogador, digite 5 números de 1 a 10')

for (let i = 1; i <= listaTamanho; i++){
    let respostaJogadorA = rs.questionInt(`Numero ${i} : `)
    if (respostaJogadorA > 0 && respostaJogadorA <= 10){
        listaJogadorA.push(respostaJogadorA)
    }else{
        console.log ('Número incorreto. Digite novamente.')
        i--
    }

    }

console.log ('Segundo jogador, digite 5 números de 1 a 10')
for (let i = 1; i <= listaTamanho; i++){
    let respostaJogadorB = rs.questionInt(`Numero ${i} : `)
    if (respostaJogadorB > 0 && respostaJogadorB <= 10){
        listaJogadorB.push(respostaJogadorB)
    }else{
        console.log ('Número incorreto. Digite novamente.')
        i--
    }
}

let numerosDiferentes = []

console.log (` ${jogadorA} digitou: ${listaJogadorA} || ${jogadorB} digitou : ${listaJogadorB}`)

for (let i = 0; i < listaJogadorA.length; i++){
     if  (!listaJogadorB.includes(listaJogadorA[i])){
        numerosDiferentes.push(listaJogadorA[i])
     }
}
console.log(`Os número que ${jogadorA} colocou de diferente de ${jogadorB} são: ${numerosDiferentes}.`)