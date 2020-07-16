const isOdd = require('is-odd')
var rs = require('readline-sync')

var pergunta = rs.questionInt("Informe o número para verificar se ele é par ou impar!: ")

function imparOuPar(){
    if(isOdd(pergunta) == true){
        console.log("O número é impar!!")
    } else {
        console.log('O número é par!!')
    }
}

imparOuPar()