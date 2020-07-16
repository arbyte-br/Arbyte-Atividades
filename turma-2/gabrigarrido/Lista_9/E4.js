const isPrime = require('prime-number')
var rs = require('readline-sync')


var pergunta = rs.questionInt("Informe o número para verificar se ele é um número primo! : ")

function ehPrimo(){
    if(isPrime(pergunta) == true){
        console.log("O número é primo!!")
    } else {
        console.log('O número não é primo!!')
    }
}

ehPrimo()