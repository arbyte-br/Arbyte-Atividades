let rs = require('readline-sync')


let playerA = rs.question ('Qual o nome do primeiro jogador? \n')
let playerB = rs.question ('Qual o nome do segundo jogador? \n')

let listaTamanho = 5

let listaPlayerA = []
let listaPlayerB = []
console.clear()

console.log (`- ${playerA}, digite 5 números de 1 a 10 - `)
for (let i = 1; i <= listaTamanho; i++){
    let respostaPlayerA = rs.questionInt(`Número ${i} : `)
    if (respostaPlayerA > 0 && respostaPlayerA <= 10){
        listaPlayerA.push(respostaPlayerA)
    }else{
        console.log ('Número não é entre 1 e 10.')
        i--
    }
    }

    console.clear()

    console.log (`- ${playerB}, digite 5 números de 1 a 10 -`)
for (let i = 1; i <= listaTamanho; i++){
    let respostaPlayerB = rs.questionInt(`Número ${i} : `)
    if (respostaPlayerB > 0 && respostaPlayerB <= 10){
        listaPlayerB.push(respostaPlayerB)
    }else{
        console.log ('Número não é entre 1 e 10.')
        i--
    }
}

console.clear()

console.log (` ${playerA} digitou: ${listaPlayerA} || ${playerB} digitou : ${listaPlayerB}`)
let numeros = []
for (let i = 0; i < listaPlayerA.length; i++ ){
    numeros.push(listaPlayerA[i])
    if (!listaPlayerA.includes(listaPlayerB[i])){
        numeros.push(listaPlayerB[i])
     }
}
console.log (`Os números inseridos foram ${numeros.join(',')}.`)