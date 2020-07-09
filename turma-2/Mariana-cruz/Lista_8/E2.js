// (OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário se a xícara está cheia ou não.

var rs = require('readline-sync')

var xicara = {}
xicara.peso = 180

var respostaUsuario = rs.questionInt("Quantos ml tem sua xicara?\n")

if (respostaUsuario >= xicara.peso){
    console.log('A xícara está cheia')
}
else{
    console.log('A xícara está vazia')
}

console.log(xicara)