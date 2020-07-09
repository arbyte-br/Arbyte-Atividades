//ok (OBRIGATÓRIO) Faça um algoritmo que receba o nome de dois jogadores e após isso
// ok peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// que apenas o jogador A e B colocou sem repetir nenhum número
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3,4,5,7,8


let rs = require('readline-sync')

let nomeJogadorA = rs.question('Jogador A, Insira seu nome: ')
let nomeJogadorB = rs.question('Jogador B, Insira seu nome: ')

let listaTamanho = 5

let listaJogadorA = []
let listaJogadorB = []

console.clear()

// jogador A
console.log ('Primeiro jogador, digite 5 numeros de 1 a 10')

for(let i = 1; i <= listaTamanho; i++){
    let respostaJogadorA = rs.questionInt(`Número ${i}:`)
    if( respostaJogadorA > 0 && respostaJogadorA <= 10){
        listaJogadorA.push(respostaJogadorA)

    } else {
        console.log('Número inserido é invalido!')
        i--
    }
}
// jogador b

for(let i = 1; i <= listaTamanho; i++){
    let respostaJogadorB = rs.questionInt(`Número ${i}:`)
    if( respostaJogadorB > 0 && respostaJogadorB <= 10){
        listaJogadorB.push(respostaJogadorB)

    } else {
        console.log('Número inserido é invalido!')
        i--
    }
}

// código que compara as duas listas e acrescenta os numeros diferentes da lista b

listaDigitados = []

for(let i = 0; i < listaTamanho; i++){
    listaDigitados.push(listaJogadorA[i])
    if(!listaJogadorA.includes(listaJogadorB[i])){
    listaDigitados.push(listaJogadorB[i])
    }
}
console.log(listaDigitados)







