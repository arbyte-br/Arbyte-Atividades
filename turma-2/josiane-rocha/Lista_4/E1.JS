let contador = 1
let contadorFinal = 1000

let numMultiplos = 0

while (contador <= contadorFinal){

    if(contador % 3 == 0 && contador % 5 == 0){
        numMultiplos = numMultiplos + contador
    }
    contador++
}
console.log(numMultiplos)