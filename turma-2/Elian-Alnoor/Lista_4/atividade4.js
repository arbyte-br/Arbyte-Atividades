// Escreva um programa que calcule a soma de todos os múltiplos de 3 
// e de 5 entre 1 e 1000.  

let n = 3

let soma = 0

while(n <= 1000){
    if(n%3 === 0 || n%5 === 0){
        soma = soma + n
    }n++
} 
console.log(soma);