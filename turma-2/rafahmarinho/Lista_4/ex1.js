// (OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
// e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
// imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
// o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
// por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
// programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
// precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
// input do usuário de string para inteiro.

let rs = require('readline-sync')

let valor1 = rs.questionInt('Digite um número entre 1 e 100: ')
let valor2 = rs.questionInt('Digite outro número entre 1 e 100: ')

if(valor1 < valor2){
    while (valor1 < valor2){
        if (valor1 % 5 == 0 && valor1 % 7 == 0) {
            console.log(`${valor1} PING PONG`)
        } else if (valor1 % 7 == 0){
            console.log(`${valor1} PING`)
        } else if (valor1 % 5 == 0){
            console.log (`${valor1} PONG`)
        } else{ 
            console.log(valor1)
        }
        valor1++
    } 
}else{
    while (valor1 > valor2){
        if (valor2 % 5 == 0 && valor2 % 7 == 0) {
            console.log(`${valor2} PING PONG`)
        } else if (valor2 % 7 == 0){
            console.log(`${valor2} PING`)
        } else if (valor2 % 5 == 0){
            console.log (`${valor2} PONG`)
        } else{
            console.log(valor2)
        }
        valor2++
    } 
}