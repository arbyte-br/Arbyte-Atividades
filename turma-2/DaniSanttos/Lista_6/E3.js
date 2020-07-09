let rs = require('readline-sync')

let numeroDePerguntas = 5

let listaDeNumerosJ1 = [].sort()

let listaDeNumerosJ2 = [].sort()

let listaDeNumerosIguais = []

let jogador1 = rs.question('Qual o nome do jogador 1? ')

for(i = 0; i < numeroDePerguntas; i++){
    let numeros = rs.questionInt('Escolha um número de 1 a 10: ')
    while (numeros < 0 || numeros > 10){
       numeros = rs.questionInt('Opção inválida, escolha um número de 1 a 10: ')
    }
    listaDeNumerosJ1.push(numeros)
}

let jogador2 = rs.question('Qual o nome do jogador 2? ')

for(i = 0; i < numeroDePerguntas; i++){
    let numeros = rs.questionInt('Escolha um número de 1 a 10: ')
    while (numeros < 0 || numeros > 10){
       numeros = rs.questionInt('Opção inválida, escolha um número de 1 a 10: ')
    }
    listaDeNumerosJ2.push(numeros)
}

for (j = 0; j < numeroDePerguntas; j++){
    
}