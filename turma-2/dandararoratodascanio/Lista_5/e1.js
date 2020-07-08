/* (OBRIGATÓRIO) Faça um algoritmo que receba uma entrada do usuário e caso
encontre uma vogal transforme ela em maiúscula (obrigatório usar FOR)
EX: abelha
O algoritmo imprime
AbElhA
Dicas para esta atividade.
Para selecionar 1 caracter da string utilizamos a função charAt :
var nome = “oi”
console.log(nome.charAt(0))
console.log(nome.charAt(1))
O algoritmo imprime:
> o
> i */

let rs = require('readline-sync')

let entradaUsuario = rs.question("Escreva seu nome: \n")

let vogal = "aeiou"
let tamanhoEntrada = entradaUsuario.length

for( let i = 0; i <= tamanhoEntrada - 1; i++) {
    
    let caractereAtual = entradaUsuario.charAt(i)
    
    let palavraVogal = vogal.includes(caractereAtual)
    if(palavraVogal) {
        let inicioPalavra = entradaUsuario.slice(0, i)
        let finalPalavra = entradaUsuario.slice(i + 1)

        entradaUsuario = inicioPalavra + caractereAtual.toUpperCase() + finalPalavra
    } 
}
console.log(entradaUsuario)