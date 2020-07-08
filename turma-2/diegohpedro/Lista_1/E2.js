// (OBRIGATÓRIO) Faça um programa que receba um número do usuário e verifique se
// este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR”

let rs = require('readline-sync')

let usuario = rs.questionInt('Digite um numero \n')

if (usuario % 2 === 0){
    console.log(`Este número ${usuario} é par`)

}else{
    console.log('Este núme é impar')
}