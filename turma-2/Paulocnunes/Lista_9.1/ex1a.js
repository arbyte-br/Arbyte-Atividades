// (Obrigatório) Para cada um dos modos de declarar variáveis, faça os seguintes testes:

// a)Declare uma variável dentro de uma função e tente acessar a mesma fora da função

let meuNome = 'Paulo César'

function nomeCompleto(meuNome, meuSobrenome) {
    let meuSobrenome = ' Nunes' // erro de variavel não definida
    console.log(nomeCompleto)
} 
console.log(meuNome + meuSobrenome)