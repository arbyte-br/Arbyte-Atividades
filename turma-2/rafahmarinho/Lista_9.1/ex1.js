// (Obrigatório) Para cada um dos modos de declarar variáveis, faça os seguintes testes:
// a) Declare uma variável dentro de uma função e tente acessar a mesma fora da função
// b) Declare uma variável dentro de um bloco (if, else, for, etc.) e tente acessar a mesma
// fora do bloco
// c) Declare duas vezes a mesma variável no mesmo escopo
// d) Declare uma variável fora de uma função, declare a mesma variável dentro de uma
// função e depois imprima seu valor depois de executar essa função
// e) Declare uma variável fora de um bloco, declare a mesma variável dentro de uma
// bloco e depois imprima seu valor depois do bloco
// f) Declare uma variável e mude o valor dela depois

function name(chamada) {
    var primeiraVar = 'Declaração da primeira variável.'
    var quartaVar = 'Declaração da quarta variável depois da modificada dentro da function.'
}
console.log(name())

if(1===1){
    let segundaVar = 'Declaração da segunda variável.'
} else{
    const terceiraVar = 'Declaração da terceira variável.'
}
console.log(segundaVar,terceiraVar)

var quartaVar = 'Declaração da quarta variável.'
var quartaVar = 'Declaração da quarta variável modificada.'

console.log(quartaVar)