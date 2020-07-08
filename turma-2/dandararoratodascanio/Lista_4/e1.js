// Escreva um programa que pedirá para o usuário dois números entre 1
// e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
// imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
// o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
// por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
// programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
// precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
// input do usuário de string para inteiro.

let rs = require('readline-sync')

let numero = rs.questionInt(`Digite um número de 1 a 100: `)
let numero2 = rs.questionInt(`Digite outro número de ${numero} a 100: `)

if (numero < numero2) {
    while(numero < numero2) {
        if (numero % 5 === 0 && numero % 7 === 0) {
            console.log("Ping Pong")
        } else if (numero % 5 === 0) {
            console.log("PONG")
        } else if (numero % 7 === 0) {
            console.log("PING")
        } else {
            console.log(numero)
        }
        numero++
    }
}