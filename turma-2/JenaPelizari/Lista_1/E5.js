/** Escreva um programa para ler 3 valores inteiros (considere que não 
serão lidos valores iguais) e escrevê-los em ordem crescente. */

let rs = require('readline-sync')
let numeros = []
let num1 = rs.questionInt('Digite o primeiro numero inteiro: ')
let num2 = rs.questionInt('Digite o segundo numero inteiro: ')
let num3 = rs.questionInt('Digite o terceiro numero inteiro: ')

if (num1 !== num2 && num3) {
    numeros.push(num1)
} 
if (num2 !== num1 && num3) {
    numeros.push(num2)
} 
if (num3 !== num1 && num3) {
    numeros.push(num3)
}
 
 if(num1 > num2 && num1 > num3){
     console.log('O maior numero entre os tres é o: ' + num1)
 }
    else if(num2 > num1 && num2 > num3){
        console.log('O maior numero entre os tres é o: ' + num2)
     }
      else if(num3 > num1 && num3 > num2) {
            console.log('O maior numero entre os tres é o: ' + num3)
 } 
console.log(numeros)
