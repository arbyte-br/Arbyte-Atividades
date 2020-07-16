// (OBRIGATÓRIO) Faça um programa que receba um número do usuário e verifique se
// este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR”

let rs = require ('readline-sync')

let respostaUsuario = rs.questionInt('Insira um numero:\n')

let numero = respostaUsuario % 2 !== 0

if( respostaUsuario = numero ){
    console.log('ÍMPAR')
} 
else{
    console.log('PAR')
}