//Escreva um programa javascript para escrever o seguinte padrão na tela, com N linhas:
//*
//* *
//* * *
//* * * *
//* * * * *
//Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).

let rs = require('readline-sync')

let i = -1

while (i < 1) {
    i = rs.questionInt('Quantas linhas deseja imprimir? \n')
}

let j = 0
let linha = ''
while (j < i) {
    linha+= '*'
    console.log(linha)
    j++
}
