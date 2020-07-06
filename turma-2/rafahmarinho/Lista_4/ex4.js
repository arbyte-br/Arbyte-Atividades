// (OBRIGATÓRIO) Escreva um programa que calcule a soma de todos os múltiplos de 3
// e de 5 entre 1 e 1000.

let v1 = 0
let v2 = 1000
let multiplos = 0

while(v1 <= v2){
    if (v1 % 3 == 0 && v1 % 5 == 0){
        multiplos = multiplos + v1
    }
    v1++
}
console.log(multiplos)