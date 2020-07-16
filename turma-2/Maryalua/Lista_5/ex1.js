//Faça um algoritmo que receba uma entrada do usuário e caso
//encontre ​ uma vogal​ transforme ela em maiúscula (obrigatório usar FOR)
//EX: abelha
//O algoritmo imprime
//AbElhA
//Dicas para esta atividade.
//Para selecionar 1 caracter da string utilizamos a função charAt :
//var nome = “oi”
//console.log(nome.charAt(0))
//console.log(nome.charAt(1))
//O algoritmo imprime:
//> o
//> i

let rs = require('readline-sync')

let p
let palavra = rs.question('insira uma palavra');

for (let i = 0; i <= palavra.length; i++) {
    p = palavra.charAt(i)
    if (p == 'a' || p == 'e' || p == 'i' || p == 'o' || p == 'u') {
        p = p.toUpperCase(palavra)
        // aqui precisa entrar alguma informação para imprimir a palavra na horizontal!
     console.log(p)
    }
} 
console.log('==')


