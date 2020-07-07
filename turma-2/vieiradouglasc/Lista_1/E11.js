// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja
// negativo, imprimindo o resultado.

let readlineSync = require('readline-sync');
let num1 = readlineSync.questionInt('Insira um número: ');

if (num1 > 0) {
    console.log(num1 * 2)
} else {
    console.log(num1 * 3)
}
