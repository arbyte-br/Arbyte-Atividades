/*Escreva uma aplicação em JS que receba um número do usuário e
verifique se o número informado está entre 1 e 10. Se estiver, sua aplicação deve
imprimir no console a mensagem "Número OK!". Se não, deve ser impresso "O número
deve ser de 1 a 10!". A verificação do número deve ser feita em uma função.*/

let rs = require('readline-sync')
let numero = rs.questionInt(`Digite um numero entre 0 e 10: `)

function verificação(){
    if(numero > 0 && numero < 10){
        return `Numero OK!`
    }else{
        return `O numero deve ser de 1 a 10`
    }
} 

console.log(verificação())
