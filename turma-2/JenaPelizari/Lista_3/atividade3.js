// (OBRIGATÓRIO) ​Escreva um algoritmo que imprima todos os números ímpares de 1 até 100.

let contador = 1
let limite = 100
while (contador <= limite) {
    if (contador % 2 !== 0) {
        console.log(contador)
    }
    contador++
}