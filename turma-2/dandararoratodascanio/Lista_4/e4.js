// Escreva um programa que calcule a soma de todos os múltiplos de 3
// e de 5 entre 1 e 1000.


let numero = 3

let soma = 0

while (numero <= 1000) {
    if(numero % 3 === 0 || numero % 5 === 0) {
        soma = soma + numero
    } numero++
}
console.log(soma) 