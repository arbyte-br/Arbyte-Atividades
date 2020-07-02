let rs = require('readline-sync')

let numeroDePerguntas = 5

let listaDeNumerosJ1 = [].sort()

let listaDeNumerosJ2 = [].sort()

let jogador1 = rs.question('Qual o nome do jogador 1? ')

for(i = 0; i < numeroDePerguntas; i++){
    let numeros = rs.questionInt('Escolha um número de 1 a 10: ')
    listaDeNumerosJ1.push(numeros)
}

let jogador2 = rs.question('Qual o nome do jogador 2? ')

for(i = 0; i < numeroDePerguntas; i++){
    let numeros = rs.questionInt('Escolha um número de 1 a 10: ')
    listaDeNumerosJ2.push(numeros)
}

console.log(`Numeros em comum dos jogadores: ${jogador1} e ${jogador2}`)

for(i = 0; i < numeroDePerguntas; i++){
    itemAtual = listaDeNumerosJ1[i]
    if(itemAtual == listaDeNumerosJ2[0]){
        console.log(itemAtual)
    }else if(itemAtual == listaDeNumerosJ2[1]){
        console.log(itemAtual)
    }else if(itemAtual == listaDeNumerosJ2[2]){
        console.log(itemAtual)
    }else if(itemAtual == listaDeNumerosJ2[3]){
        console.log(itemAtual)
    }else if(itemAtual == listaDeNumerosJ2[4]){
        console.log(itemAtual)
    }
}

//console.log(listaDeNumerosJ1.filter(listaDeNumerosJ1 != listaDeNumerosJ2))
