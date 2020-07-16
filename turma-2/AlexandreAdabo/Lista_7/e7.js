let rs = require('readline-sync')

let jogador1 = rs.question('Qual o nome do primeiro jogador ? ')
let jogador2 = rs.question('Qual o nome do segundo jogador ? ')
let numero1 = rs.questionFloat('Digite um numero entre 1 e 100: ', jogador1)
let numero2 = rs.questionFloat('Digite um numero entre 1 e 100: ', jogador2)

function numeroCorreto(n){
    if(numero1 === n && numero2 === n){
        console.log('Os dois acertaram o numero correto')
    }
    else if(numero1 === n){
        console.log('Acertou o numero correto', jogador1)
    } 
    else if(numero2 === n){
        console.log('Acertou o numero correto', jogador2)
    }
}
console.log(numeroCorreto(32))