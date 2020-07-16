let rs = require('readline-sync')


function verificarValores(n1, n2){
    n1 = rs.questionFloat('Digite um numero: ')
    n2 = rs.questionFloat('Digite outro numero: ')

    if (n1 > n2){
        return console.log(`O menor numero e ${n2}`)
    }else{
        return console.log(`O menor numero e ${n1}`)
    }
} 
verificarValores()