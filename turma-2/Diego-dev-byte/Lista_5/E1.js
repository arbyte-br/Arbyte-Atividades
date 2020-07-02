//(OBRIGATÓRIO) Faça um algoritmo que receba uma entrada do usuário e caso
//encontre uma vogal transforme ela em maiúscula (obrigatório usar FOR)
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
//O número que
//O número que colocamos dentro de charAt é a posição do caractere que queremos da
//string. Lembrando que o primeiro elemento é 0 e não 1.
//Sendo assim, uma string de 2 elementos possui os elementos 0 e 1.
//Para cada charAt você deve concatenar isto numa string separada e exibir ela no final



let rs = require('readline-sync')

let vogal = 'aeiou'

let entrada = rs.question('Escreva uma palavra \n')
let tamanhoEntrada = entrada.length

for ( let i = 0; i <= tamanhoEntrada - 1; i++){

    let palavra = entrada.charAt(i)

    let vogalpalavra = vogal.includes(palavra)
    if (vogalpalavra) {
        let inicioDaPalavra = entrada.slice(0, i)
        let finalDaPalavra = entrada.slice(i + 1)

        entrada = inicioDaPalavra + palavra .toUpperCase() + finalDaPalavra
    }
}
console.log(entrada)