// (OBRIGATÓRIO) Escreva um programa para ler 3 valores inteiros (considere que não
//  serão lidos valores iguais) e escrevê-los em ordem crescente.

let rs = require('readline-sync')

let numberA = rs.questionInt('Digite o primeiro numero: ')
let numberB = rs.questionInt('Digite o segundo numero: ')
let numberC = rs.questionInt('Digite o terceiro numero: ')

if(numberA < numberB && numberA < numberC && numberB < numberC){
    console.log(`${numberA} ${numberB} ${numberC}`)
}

if(numberB < numberA && numberB < numberC && numberA < numberC){
    console.log(`${numberB} ${numberA} ${numberC}`)
}

if(numberC < numberA && numberC < numberB && numberA < numberB){
    console.log(`${numberC} ${numberA} ${numberB}`)
}

if(numberA < numberB && numberA < numberC && numberC < numberB){
    console.log(`${numberA} ${numberC} ${numberB}`)
}

if(numberB < numberA && numberB < numberC && numberC < numberA){
    console.log(`${numberB} ${numberC} ${numberA}`)
}

if(numberC < numberA && numberC < numberB && numberB < numberA){
    console.log(`${numberC} ${numberB} ${numberA}`)
}

