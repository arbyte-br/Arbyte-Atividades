// Fazer um programa para receber um número e verificar se está entre 100 e 200.
// Se estiver na faixa, imprimir:
// Você digitou um numero entre 100 e 200.
// Senão estiver na faixa, imprimir
// Você digitou um numero fora da faixa entre 100 e 200.

let rs = require('readline-sync')

let numero = rs.question("Digite um núme entre 100 e 200: \n")

if(numero >= 100 && numero <=200){
    console.log('Você digitou um numero entre 100 e 200.')
}else{
    console.log('Você digitou um numero fora da faixa entre 100 e 200.')
}

