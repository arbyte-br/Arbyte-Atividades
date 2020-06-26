let rs = require('readline-sync')

let jogadorA = rs.question('Qual o seu nome? Voce sera o jogar A: ')
let jogadorB = rs.question('Qual o seu nome? Voce sera o jogar B: ')

let numerosJogadorA = []
let numerosJogadorB = []

for(let i = 0; i < 5; i++){
    let nA = rs.questionInt(`${jogadorA}, digite 5 numeros: `)
    numerosJogadorA.push(nA)
}
console.log("===================")

for(let i = 0; i < 5; i++){
    let nB = rs.questionInt(`${jogadorB}, digite 5 numeros: `)
    numerosJogadorB.push(nB)
}
console.log(`${jogadorA}, seus números são: ${numerosJogadorA}`)
console.log("===================")
console.log(`${jogadorB}, seus números são: ${numerosJogadorB}`)


for(let i = 0; i < 5; i++){
    if(numerosJogadorA.indexOf(numerosJogadorB[i]) > -1){
    console.log(`Os números iguais são: ${numerosJogadorB[i]}`)
    }
}
console.log('=================================')
