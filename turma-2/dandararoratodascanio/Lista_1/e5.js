// Escreva um programa para ler 3 valores inteiros (considere que não
// serão lidos valores iguais) e escrevê-los em ordem crescente.

let valor1 = 10
let valor2 = 50
let valor3 = 70

if (valor1 < valor2 && valor1 < valor3) {
    if (valor2 < valor3) {
        console.log(valor1, valor2, valor3)
    } else {
        console.log(valor1, valor3, valor2)
    }
} else if (valor2 < valor1 && valor2 < valor3) {
    if (valor3 < valor1) {
        console.log(valor2, valor3, valor1)
    } else {
        console.log(valor2, valor1, valor3)
    }
} else {
    if (valor2 < valor1) {
        console.log(valor3, valor2, valor1)
    } else {
        console.log(valor3, valor1, valor2)
    }
}