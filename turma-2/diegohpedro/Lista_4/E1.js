// (OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
// e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
// imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
// o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
// por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
// programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
// precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
// input do usuário de string para inteiro.
// 

let rs = require('readline-sync')


let numero1 = rs.questionInt('Digite um numero entre 1 e 100: \n')

let numero2 = rs.questionInt('Digite um numero entre 1 e 100: \n')

let inicioDoLoop = 100

let fimDoLoop = 0


if (numero1 > numero2) {
    inicioDoLoop = numero2
    fimDoLoop = numero1
} 
else if (numero1 < numero2){
    inicioDoLoop = numero1
    fimDoLoop = numero2
} 
else {
    console.log("O programa bugou!")
}

while (inicioDoLoop <= fimDoLoop){
    
    if (inicioDoLoop % 5 == 0 && inicioDoLoop % 7 == 0){
        console.log(inicioDoLoop + " Ping Pong")
    } 
    else if (inicioDoLoop % 5 == 0){
        console.log(inicioDoLoop + " Ping")
    } 
    else if (inicioDoLoop % 7 == 0){
        console.log(inicioDoLoop + " Pong")
    }    
    else {
        console.log(inicioDoLoop)
    }
    inicioDoLoop ++
}



////////////////////////////////////////reafatorar esse codigo







