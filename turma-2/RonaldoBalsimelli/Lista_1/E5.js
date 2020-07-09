/*(OBRIGATÓRIO) Escreva um programa para ler 3 valores inteiros (considere que não
    serão lidos valores iguais) e escrevê-los em ordem crescente.*/

let rs = require('readline-sync')

    let numero1 = rs.question('Digite um número: \n')
    let numero2 = rs.question('Digite um número: \n')
    let numero3 = rs.question('Digite um número: \n')

     let lista = [numero1, numero2, numero3].sort()

     console.log(lista)
    