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

//a)  Declare uma variável dentro de uma função e tente acessar a mesma fora da função
function funcao (){
    let teste = 'Isso é um teste'
    
}
funcao()
console.log(teste)


//b) Declare uma variável dentro de um bloco (if, else, for, etc.) e tente acessar a mesma

var numeroMaior = 5
var numeroMenor = 3

if(numeroMaior > numeroMenor){

}
console.log(numeroMaior)

//c) Declare duas vezes a mesma variável no mesmo escopo

let faustao = 'oloco'


let faustao = 'oloco bicho'
let outroFausto = 'está fera ai meo'

console.log()
console.log()





