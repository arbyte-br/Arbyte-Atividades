let rs = require('readline-sync')

let player1 = rs.question ('Qual o nome do primeiro jogador? \n')
let player2 = rs.question ('Qual o nome do segundo jogador? \n')

let listaTamanho = 5

let listaPlayer1 = []
let listaPlayer2 = []

console.log (`${player1} - Digite 5 números de 1 a 10 -`)

for (let i = 1; i <= listaTamanho; i++){
    let respostaPlayer1 = rs.questionInt(`Número ${i} : `)
   
    if (respostaPlayer1 > 0 && respostaPlayer1 <= 10){
        listaPlayer1.push(respostaPlayer1)
    }else{
        console.log ('Número não é entre 1 e 10.')
        i--
    }
    }

        console.log (`${player2} - Digite 5 números de 1 a 10 -`)

for (let i = 1; i <= listaTamanho; i++){
    let respostaPlayer2 = rs.questionInt(`Número ${i} : `)
    
    if (respostaPlayer2 > 0 && respostaPlayer2 <= 10){
        listaPlayer2.push(respostaPlayer2)
    }else{
        console.log ('Número não é entre 1 e 10.')
        i--
    }
}

console.clear()

let numerosDiferentes = []

console.log (` ${player1} digitou: ${listaPlayer1} || ${player2} digitou : ${listaPlayer2}`)
for (let i = 0; i < listaPlayer1.length; i++){
     if  (!listaPlayer2.includes(listaPlayer1[i])){
        numerosDiferentes.push(listaPlayer1[i])
     }
}
console.log(`Os número que ${player1} colocou de diferente de ${player2} são: ${numerosDiferentes}.`)