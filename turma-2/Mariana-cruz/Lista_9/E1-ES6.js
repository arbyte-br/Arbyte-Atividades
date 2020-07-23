// 1 - (Obrigatório) Para cada um dos modos de declarar variáveis, faça os seguintes testes:



// d) Declare uma variável fora de uma função, declare a mesma variável dentro de uma
// função e depois imprima seu valor depois de executar essa função
// e) Declare uma variável fora de um bloco, declare a mesma variável dentro de uma
// bloco e depois imprima seu valor depois do bloco
// f) Declare uma variável e mude o valor dela depois

//a) Declare uma variável dentro de uma função e tente 
//acessar a mesma fora da função
// var x = "variavel fora da function";

// function y (){

//     var x2 = "variavel fora da function"
// }
// console.log('x2: ', x2);

// b) Declare uma variável dentro de um bloco 
// (if, else, for, etc.) e tente acessar a mesma fora do bloco

// var i = 'variavel dentro do bloco';
// var n = '';

// if (i < n){
//     var i = 'deu certo'
// }

// console.log(i)


// c) Declare duas vezes a mesma variável no mesmo escopo


{let x2 = "variavel fora da function"
let x2 = "outra variavel"
     console.log('x2: ', x2);
}
