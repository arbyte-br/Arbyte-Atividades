var rs = require("readline-sync");

let Contador = 0
let fimContador = 100
var numeroUsuario = rs.question("Por Favor, digite um número de 0 a 100: ");

while (Contador <= fimContador) {

    let = sobraDaDivisao = Contador % 2

    if (sobraDaDivisao === 0) {
    console.log(Contador, 'PAR')
    } else {
    console.log(Contador, 'IMPAR')
    }
    Contador++
}