// (OBRIGATÓRIO) As maçãs custam R$ 0,30 cada se forem compradas menos do que
// 12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
// de maçãs compradas, calcule e escreva o valor total da compra


let rs = require ('readline-sync')

console.log('Quantas maçãs deseja comprar?')
let respostaUsuario = rs.questionInt('')

if ( respostaUsuario < 12){
    console.log('Sua compra vai custar: '+ respostaUsuario * 0.30)
} 
else if(respostaUsuario >= 12){
    console.log('Sua compra vai custar: '+ respostaUsuario * 0.25)
}

