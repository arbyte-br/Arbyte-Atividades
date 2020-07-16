// ​Escreva um programa que pedirá para o usuário dois números entre 1 
// e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre 
// imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7, 
// o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível 
// por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o 
// programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez 
// precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um 
// input do usuário de string para inteiro. 

let rs = require("readline-sync")

let n1 = rs.questionInt("insira um número n1 entre 1 e 100: \n")

let n2 = rs.questionInt("insira um número n2 entre 1 e 100: \n")


if(n1 < n2){
    let i = n1
    while(i <= n2){
        if(i % 5 === 0 && i % 7 === 0){
            console.log("Ping Pong")
        }else if(i % 7 === 0){
            console.log("Ping")
        }else if(i % 5 === 0){
            console.log("Pong")
        }else{
            console.log(i)
        } i++
    }
}else{
    let i = n2
    while(i <= n1){
        if(i % 5 === 0 && i % 7 === 0){
            console.log("Ping Pong")
        }else if(i % 7 === 0){
            console.log("Ping")
        }else if(i % 5 === 0){
            console.log("Pong")
        }else{
            console.log(i)
        }i++
    }
}
