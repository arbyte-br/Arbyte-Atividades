//Escreva um programa que calcule a soma de todos os múltiplos de 3 e de 5 entre 1 e 1000.

let i = 3
let soma = 0

while (i < 1000) {
    if (i % 3 === 0 || 1 % 5 === 0) {
        soma = soma + i
    } i++
}
console.log(soma);