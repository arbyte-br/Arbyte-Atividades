/*
12.Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
Solicite dois números para o usuário e forneça como argumento para esta função.
Escreva o resultado da função na tela dizendo qual menor número.
*/

const rs = require('readline-sync');

let n1 = rs.questionInt('Por favor, informe um número: ');

let n2 = rs.questionInt('Por favor, informe outro número: ');

function maiorNumero(){
    if(n1 < n2){
        return n1;
    }else{
        return n2;
    }
}

let res = maiorNumero(n1, n2);
console.log(`O menor número é: ${res}.`);