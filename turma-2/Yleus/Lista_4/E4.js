let rs = require('readline-sync')

// ) ​Escreva um programa que calcule a soma de todos os múltiplos de 3e de 5 entre 1 e 1000.


let contador = 1
let multiplos = 0

while(contador <=1000){
    if(contador % 3 ===0 && contador % 5 === 0){
multiplos = multiplos + contador
    }
    contador++
}
console.log(multiplos)