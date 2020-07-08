// (OBRIGATÓRIO) Escreva um programa que calcule a soma de todos os múltiplos de 3
// e de 5 entre 1 e 1000.

let valor1 = 0

let valor2 = 1000

let multiplos = 0

while(valor1 <= valor2){
    if (valor1 % 3 == 0 && valor1 % 5 == 0){
        multiplos = multiplos + valor1
    }
    valor1++
}
console.log(multiplos)