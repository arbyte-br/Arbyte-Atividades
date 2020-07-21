// (Obrigatório) Para cada um dos modos de declarar variáveis, faça os seguintes testes:

// a)Declare uma variável dentro de uma função e tente acessar a mesma fora da função

let meuNome = 'Paulo César'

function qualquerCoisa() {
    let meuSobrenome = ' Nunes' //da erro de variavel não definida
} 
console.log(meuNome + meuSobrenome)

// b)Declare uma variável dentro de um bloco (if, else, for, etc.) e tente acessar a mesma fora do bloco

let numero1 = 10

if (numero1 > 0) {
    let numero2 = 20 //erro de variavel não definida.
}
console.log(numero1+numero2)

// c)Declare duas vezes a mesma variável no mesmo escopo
