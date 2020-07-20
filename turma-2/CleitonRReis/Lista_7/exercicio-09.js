/*
9. Faça uma função que recebe por parâmetro um valor inteiro e positivo 
e retorna o valor lógico Verdadeiro caso o valor seja primo e Falso em caso contrário. 
Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na condição IF.
*/


const rs = require('readline-sync');

let n1 = rs.questionInt('Por favor, informe um número: ');

let total = 0;

let n = 0;

function imprimeNumeroPrimo() {

    for (let i = 0; i <= n1; i++) {
        if (n1 % i == 0) {
            total = total + 1;
        } else {
            n = n + 1;
        }
    }
    if (total == 2) {
        console.log(`${n1} eh PRIMO!`)
    } else {
        console.log(`${n1} não eh PRIMO!`)
    }
}

imprimeNumeroPrimo();