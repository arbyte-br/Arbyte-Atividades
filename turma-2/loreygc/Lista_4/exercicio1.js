let rs = require('readline-sync')
let numero1 = rs.questionInt('Digite um número: ')     
let numero2 = rs.questionInt('Digite outro número: ')  
let numeroMaior
let numeroMenor
if (numero1 > numero2) {    
    numeroMaior = numero1
    numeroMenor = numero2
} else {
    numeroMaior = numero2   
    numeroMenor = numero1  
}
console.log('Numero maior é: ', numeroMaior);
console.log('Numero menor é: ', numeroMenor);
let contador = numeroMenor 
while (contador <= numeroMaior) {  
    let numeroAtual = contador
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
    contador++
}