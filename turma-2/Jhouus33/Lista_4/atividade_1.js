// Escreva um programa que pedirá para o usuário dois números entre 1 e 100.
// O programa deve, então, iterar de um em um do menor pro maior, sempre imprimindo o número na tela do usuário.
// Entretanto, caso o número seja divisível por 7, o programa deve ao invés disso imprimir a palavra “Ping”.
// Caso o número seja divisível por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5,
// o programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez precisem fazer
// uso do recurso “user.questionInt()” que transforma o conteúdo de um input do usuário de string para inteiro

let rs = require('readline-sync')


let num1 = rs.questionInt('Digite um número entre 1 e 100: \n')
let num2 = rs.questionInt('Digite outro número entre 1 e 100: \n')

let numeroMaior
let numeroMenor
if (num1 > num2) {    
    numeroMaior = num1
    numeroMenor = num2
} else {
    numeroMaior = num2   
    numeroMenor = num1  
}

let i = numeroMenor 
while (i <= numeroMaior) {  
    let numeroAtual = i
    if (numeroAtual % 7 === 0 && numeroAtual % 5 === 0) {
        console.log(numeroAtual)
        console.log('Ping Pong')
    } else if (numeroAtual % 7 === 0) {
        console.log(numeroAtual)
        console.log('Ping')
    } else if (numeroAtual % 5 === 0) {
        console.log(numeroAtual)
        console.log('Pong')
    }
    i++
}
   
