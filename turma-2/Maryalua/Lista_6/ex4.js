//Crie um programa que receba uma palavra e exiba quantas
//consoantes e vogais essa palavra tem.
//EX : saúde
//2 consoantes
//3 vogais

let rs = require('readline-sync');

let palavra = rs.question('insira uma palavra:');

contadorv=0
contadorc=0

for (let index = 0; index < palavra.length; index++) {
    if(palavra[index]==='a' || palavra[index]==='e' || palavra[index]==='i'||palavra[index]==='o'||palavra[index]==='u'){
        contadorv++


    } else {
        contadorc++
    }
    

}
console.log(+contadorv+ 'vogais e' + contadorc+ 'consoantes')