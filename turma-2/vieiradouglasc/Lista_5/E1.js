// (OBRIGATÓRIO)​ Faça um algoritmo que receba uma entrada do usuário e caso
// encontre ​ uma vogal​ transforme ela em maiúscula (obrigatório usar FOR)
// EX: abelha
// O algoritmo imprime
// AbElhA

let readlineSync = require('readline-sync')
let texto = readlineSync.question('Escreva uma palavra: ')
texto = texto.toLocaleLowerCase()
let tamanho = texto.length
for (let i = 0; i < tamanho; i++) {
    if (texto.charAt(i) === 'a' || texto.charAt(i) === 'e' || texto.charAt(i) === 'i' || texto.charAt(i) === 'o' || texto.charAt(i) === 'u') {
        console.log(texto.charAt(i).toUpperCase())
    } else {
        console.log(texto.charAt(i))
    }
}