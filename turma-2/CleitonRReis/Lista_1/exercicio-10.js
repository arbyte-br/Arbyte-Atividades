var rs = require('readline-sync')

var num = 0;

console.log('Digite um número para saber se ele está está entre 100 e 200.')

var num = rs.questionFloat('Digite o número: ');

if(num > '100' && num < '200'){
    console.log('Você digitou um número entre 100 e 200!')
}else{
    console.log('Você digitou um número fora da faixa entre 100 e 200')
}