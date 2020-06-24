let readlineSync = require('readline-sync');
let contador = 0;

while (contador <= 100) {
    if (contador%2 == 1){
        console.log(contador);
    }
    contador++;
}