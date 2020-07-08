let rs = require ('readline-sync')

let playerA = rs.question ('Qual o nome do primeiro jogador? \n')
let playerB = rs.question ('Qual o nome do segundo jogador? \n')

let listaTamanho = 5

let listaPlayerA = []
let listaPlayerB = []

console.clear()

console.log ('- Primeiro jogador, digite 5 números de 1 a 10 -')

for (let i = 1; i <= listaTamanho; i++){
    let respostaPlayerA = rs.questionInt(`Numero ${i} : `)
    if (respostaPlayerA > 0 && respostaPlayerA <= 10){
        listaPlayerA.push(respostaPlayerA)
    }else{
        console.log ('Numero não é entre 1 e 10.')
        i--
    }

    }
console.clear()

console.log ('- Segundo jogador, digite 5 numeros de 1 a 10 -')
for (let i = 1; i <= listaTamanho; i++){
    let respostaPlayerB = rs.questionInt(`Numero ${i} : `)
    if (respostaPlayerB > 0 && respostaPlayerB <= 10){
        listaPlayerB.push(respostaPlayerB)
    }else{
        console.log ('Numero não é entre 1 e 10.')
        i--
    }
}
console.clear()
console.log (` ${playerA} digitou: ${listaPlayerA} || ${playerB} digitou : ${listaPlayerB}`)
let numerosDigitados = []

for (let i = 0; i < listaPlayerA.length; i++ ){
    numerosDigitados.push(listaPlayerA[i])
    if (!listaPlayerA.includes(listaPlayerB[i])){
        numerosDigitados.push(listaPlayerB[i])
     }
}
console.log (`Os numeros inseridos foram ${numerosDigitados.sort().join(',')}.`)