let rs = require("readline-sync")

let jogador1 = rs.question("Insira o nome do jogador 1\n")

let jogador2 = rs.question("Insira o nome do jogador 2\n")

let listajogador1 = []

let listajogador2 = []

let numerosRepetidos = []

let numjogador1 = 4

for(let i = 0; i <= numjogador1; i++){
    let respostajogador1 = rs.questionInt("Jogador 1, digite 1 numero de 1 a 10\n")
    listajogador1.push(respostajogador1)
}

let numjogador2 = 4

for(let i = 0; i <= numjogador2; i++){
    let respostajogador2 = rs.questionInt("Jogador 2, digite 1 numero de 1 a 10\n")
    listajogador2.push(respostajogador2)
}

console.log(jogador1 + " " + listajogador1)
console.log(jogador2 + " " + listajogador2)

for(let i = 0; i <= listajogador1.length; i++){
    for(let j = 0; j <= listajogador2.length; j++){
        if (listajogador1[i] == listajogador2[j]){
            numerosRepetidos.push(listajogador1[i])
        }
    }
}

console.log(numerosRepetidos)