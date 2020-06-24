//Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP” de acordo com o número inserido.


let rs = require('readline-sync');

let numero = rs.questionInt('insira um numero');

while (numero > 0) {
    console.log("BIP BIP");
    numero = numero - 1;
}

