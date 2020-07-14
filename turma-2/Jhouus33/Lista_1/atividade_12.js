// Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.
let rs = require('readline-sync')

let A = rs.questionInt("Digite um número inteiro: \n")
let B = rs.questionInt("Digite mais um número: \n")
let divisao = A / B

if(A % B == 0){
 console.log(`${A} / ${B} = ${divisao} | Divisível! `)
}else{
    console.log('Não divisível')
}