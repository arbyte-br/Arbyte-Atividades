//Faça um algoritmo que receba uma entrada do usuário e caso encontre ​uma vogal​ transforme ela em 
//maiúscula (obrigatório usar FOR)
//EX: abelha 
//O algoritmo imprime AbElhA

let rs = require('readline-sync')

let vogais = ['a','e','i','o','u']

let palavra = rs.question('Digite uma palavra: \n')

let tamanho = palavra.length

for (let i = 0; i < tamanho; i++) {
    if (palavra.charAt(i) === 'a' || palavra.charAt(i) === 'e' || palavra.charAt(i) === 'i' || palavra.charAt(i) === 'o' || palavra.charAt(i) === 'u') {
        console.log(palavra.charAt(i).toUpperCase(palavra))
    }   else {
        console.log(palavra.charAt(i))
    }
}