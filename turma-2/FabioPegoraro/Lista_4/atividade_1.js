//Escreva um programa que pedirá para o usuário dois números entre 1 e 100. OK
//O programa deve, então, iterar de um em um do menor pro maior, sempre imprimindo o número na tela do usuário. OK
//Entretanto, caso o número seja divisível por 7, o programa deve ao invés disso imprimir a palavra “Ping”. OK
//Caso o número seja divisível por 5, o programa deve imprimir “Pong”. OK
//Caso o número seja divisível por 7 e 5, o programa deveria imprimir a mensagem “Ping Pong”. OK
//Dica: Neste exercício vocês talvez precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um input do usuário de string para inteiro. OK

let rs = require("readline-sync")
// Pedindo numeros p/ usuario e confirmando se está entre 1 e 100

let n1 = rs.questionInt("Digite um numero entre 1 a 100:")
while (n1 < 1 || n1 > 100) {
    n1 = rs.questionInt("Digite um número entre 1 e 100:" )
}

let n2 = rs.questionInt("Digite outro numero entre 1 a 100:")
while (n2 < 1 || n2 > 100) {
    n2 = rs.questionInt("Digite um número entre 1 e 100:" )
}

//==========================
// Vendo qual o numero é menor e maior
if (n1 < n2){
    nMenor = n1, nMaior = n2  
}else{
    nMenor = n2, nMaior = n1
}
//==========================
// imprimindo os numeros
let contador = nMenor;
let fimContador = nMaior;

while(contador <= fimContador){
    
    if(contador % 5 === 0 && contador % 7 === 0 ){
        console.log(contador, "Ping Pong")
    }else if(contador % 5 === 0){
        console.log(contador, "Pong")
    }else if (contador % 7 === 0 ){
        console.log(contador, "Ping")
    }else{
        console.log (contador)
    }
    contador++
}
//======================