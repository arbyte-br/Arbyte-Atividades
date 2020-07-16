let contador = 0

let multiplos = 0

while (contador < 1000) {
    if (contador % 3 == 0 || contador % 5 == 0){
    
        multiplos = contador + multiplos
    }
    contador++
}
console.log(multiplos)