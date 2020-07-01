//Faça um algoritmo que verifica se uma string comece com a palavra google
//Caso comece imprima que a palavra é valida se não diga que não conhece o serviço.
//EX: entrada Google drive
//O algoritmo imprime
//Palavra valida
//Utilize o método ​ startsWith()

let rs = require('readline-sync');
let pergunta = rs.question('insira uma palavra:');

if(pergunta.startsWith('google')){
    console.log('palavra válida!')
} else {
    console.log('serviço não identificado')
}