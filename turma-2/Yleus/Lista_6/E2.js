let rs = require('readline-sync')

let JogadorA = rs.question("Digite seu nome, jogador A\n>>")
let JogadorB = rs.question("Digite seu nome, jogador B\n>>")

let numerosJogadorA = []
let numerosJogadorB = []
let numerosDiferentes =[]
let i;

for(i = 0; i < 5; i++){
    let nA = rs.questionInt(`${JogadorA}, digite 5 numeros de 1 a 5\n>>`)
if(nA <= 10 && nA >0){
numerosJogadorA.push(nA)}
else{
    console.log("Esse numero deve estar entre 1 e 10")
    numerosJogadorA.push(nA)
    numerosJogadorA.pop()
    i--
}
}

for(i = 0; i < 5; i++){
    let nB = rs.questionInt(`${JogadorB}, digite 5 numeros de 1 a 5\n>>`)
if(nB <= 10 && nB >0){
numerosJogadorB.push(nB)
}
else{
    console.log("Esse numero deve estar entre 1 e 10")
    numerosJogadorB.push(nA)
    numerosJogadorB.pop()
    i--
}
}

console.log(`${JogadorA}, seus numeros sao: ${numerosJogadorA}`)
console.log(`${JogadorB}, seus numeros sao: ${numerosJogadorB}`)

for(i = 0; i < 5; i++){
    if(numerosJogadorA.indexOf(numerosJogadorB[i]) == -1){
        numerosDiferentes.push(numerosJogadorB[i])
    }    
}

console.log(`Os números diferentes são: ${numerosDiferentes}`)