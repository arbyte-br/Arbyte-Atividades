//Escreva um programa que calcule a soma de todos os múltiplos de 3 e de 5 entre 1 e 1000

let contador = 1
let contadorFinal = 1000

let numMultiplos = 0

while(contador <= contadorFinal){
    if (contador % 3 == 0 && contador % 5 == 0){
        numMultiplos = numMultiplos + contador
    }
    contador++
}
console.log(numMultiplos)


//Confirmar se está certo