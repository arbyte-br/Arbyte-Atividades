/*
9.(OBRIGATÓRIO) ​[O censor] - Faça um programa que receba uma frase e troque apalavra ‘bosta’ por ‘estrume’. ​
(eu sei, nosso trabalho como programador de vez emquando é uma estrume)​.Utilize o método ​replace()
*/

const rs = require('readline-sync');

var frase = rs.question('Por fafor, insira uma frase: ');

if(frase){
    console.log(frase.replace(/bosta/gi, "estrume"));
}

/* i == retira o case-sensitive da frase; g == pesquisa por todas as ocorrências */