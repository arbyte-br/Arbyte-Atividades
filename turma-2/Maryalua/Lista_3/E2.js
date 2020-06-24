//Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM usar o operador de multiplicação (*)

let rs = require('readline-sync');

let n1 = rs.questionInt('insira um número');
let n2 = rs.questionInt('insira outro número');
let n3 = n2;

contador = 0

while (n1 > 0) {
    n2 = n3
    n1 = n1 - 1
    while (n2 > 0) {
        n2 = n2 - 1
        contador = contador + 1
    

    }

}
console.log(contador)
