let rs = require('readline-sync')


let JogadorA = rs.question("Digite seu nome jogador A\n>>")
let JogadorB = rs.question("Digite seu nome jogador B\n>>")

let numerosJogadorA = []
let numerosJogadorB = []
let numerosIguais = []
let i;

for(i = 0; i < 5; i++){
    let nA = rs.questionInt(`${JogadorA}, digite 5 numeros (entre 1 e 10): `)
    if (nA <= 10 && nA > 0){
        numerosJogadorA.push(nA)
    }else{
        console.log('Esse numero deve estar entre 1 e 10')
        numerosJogadorA.push(nA)
        numerosJogadorA.pop()
        i--
    }
}

for(i = 0; i < 5; i++){
    let nB = rs.questionInt(`${JogadorB}, digite 5 numeros (entre 1 e 10): `)
    if (nB <= 10 && nB > 0){
        numerosJogadorB.push(nB)
    }else{
        console.log('Esse numero deve estar entre 1 e 10')
        numerosJogadorB.push(nB)
        numerosJogadorB.pop()
        i--
    }
}
console.log(`${JogadorA}, seus números são: ${numerosJogadorA}`)
console.log(`${JogadorB}, seus números são: ${numerosJogadorB}`)

for(i = 0; i < 5; i++){
    if(numerosJogadorA.indexOf(numerosJogadorB[i]) > -1){
        numerosIguais.push(numerosJogadorB[i])
    }    
}

console.log(`Os números iguais são: ${numerosIguais}`)






