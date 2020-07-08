let rs = require ('readline-sync');

let palavra = rs.question('Digite uma palavra ');

CONT = palavra.length;   

while (true){
    console.log(palavra.split('').reverse().join(''));
    break;
}



