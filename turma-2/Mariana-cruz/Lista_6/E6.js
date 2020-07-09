// (OBRIGATÓRIO) Faça um programa que receba uma palavra e verifica se ela termina
// com “al” se termina com “al” então imprime a palavra se não imprime “palavra não
// identificada”.
// Utilize o método endsWith()

let rs = require ('readline-sync')
let respostaUsuario = rs.question ('Digite uma palavra: ')

if (respostaUsuario.endsWith('al')){
    console.log(respostaUsuario.toLowerCase())
} 
else {
    console.log ('Palavra não identificada.')
}