// (OBRIGATÓRIO) Faça um programa que recebe um número de entrada e repita a mensagem 
//“BIP BIP” de acordo com o número inserido.
//EX: usuário inseriu 3. O programa imprime: BIP BIP BIP BIP BIP BIP

let rs = require('readline-sync');
let numeroUsuario = rs.questionInt("Quantas vezes devo imprimir BIP BIP? ");
let contador = 0

while (contador < numeroUsuario) {
    console.log("BIP BIP");
    contador++
}

