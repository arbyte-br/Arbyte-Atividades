/* 1. (OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
input do usuário de string para inteiro. */

let rs = require('readline-sync')

let numero1 = rs.questionInt('Por Favor, digite um número entre 1 e 100: ')
let numero2 = rs.questionInt('Por Favor, digite outro número entre 1 e 100: ')

if(numero1 < numero2){
    while (numero1 < numero2){
        if (numero1 % 5 == 0 && numero1 % 7 == 0) {
            console.log(`${numero1} PING PONG`)
        } else if (numero1 % 7 == 0){
            console.log(`${numero1} PING`)
        } else if (numero1 % 5 == 0){
            console.log (`${numero1} PONG`)
        } else{
            console.log(numero1)
        }
        numero1++
    } 
}else{
    while (numero1 > numero2){
        
        if (numero2 % 5 == 0 && numero2 % 7 == 0) {
            console.log(`${numero2} PING PONG`)
        } else if (numero2 % 7 == 0){
            console.log(`${numero2} PING`)
        } else if (numero2 % 5 == 0){
            console.log (`${numero2} PONG`)
        } else{
            console.log(numero2)
        }
        numero2++
    } 
}