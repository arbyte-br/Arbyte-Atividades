const readline = require('readline-sync');

let anoNasc  = readline.question('Por gentileza insira o ano do seu nascimento: ');

const podeVotar = (2020 - anoNasc);

if (podeVotar >= 16){
    console.log(`Voce possui ${podeVotar} anos, neste caso já pode votar!`);
}else {
    console.log(`Você possui ${podeVotar} anos, ainda não é permitido votar!`);
}

