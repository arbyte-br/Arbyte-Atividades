let readlineSync = require('readline-sync');

let baixo = readlineSync.questionInt('Digite um numero para ser a base da potencia: ');

let cima = readlineSync.questionInt('Digite um numero para ser o expoente: ');

let contador = 0;
let potencia = 1;
while (contador != cima) {
    potencia = potencia * baixo;
    contador++;
}
console.log(`O resultado do calculo da potencia do número ${baixo} elevado a ${cima} é: ${potencia}.`)