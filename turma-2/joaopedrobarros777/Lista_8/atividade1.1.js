var rs = require ("readline-sync")

var jogador1 = {
    nomeJogador1: rs.question("Jogador 1, qual eh o seu nome?\n"),
    numeroJogador1: rs.questionInt("Jogador 1, digite um numero.\n")
}

var jogador2 = {
    nomeJogador2: rs.question("Jogador 2, qual eh o seu nome?\n"),
    numeroJogador2: rs.questionInt("Jogador 2, digite um numero.\n")
}

if (jogador1.numeroJogador1 > jogador2.numeroJogador2){
    console.log(jogador1.nomeJogador1 + " digitou o maior numero!")
} else {
    console.log(jogador2.nomeJogador2 + " digitou o maior numero!")
}