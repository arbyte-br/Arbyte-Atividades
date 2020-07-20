/*
14.Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir
qual é a menor idade.
*/

var rs = require('readline-sync');

var menor = 0;

var i = 0; // 0 // 1 // 2 

while(i < 8){
    var idade = rs.questionInt('Informe até 8 idades para saber a maior delas: '); // 8 - 12 - 5 - 6 -3 -7 - 9 - 23
    if(i == 0){
        menor = idade;
    }

    if(i > 0){
        if(idade < menor) {
            menor = idade;
        }
    }
    i++;
}
console.log(menor);