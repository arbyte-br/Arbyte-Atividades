let rs = require('readline-sync');

let palavra = rs.question('Digite uma palavra ');

let vogais = ['a', 'e', 'i' , 'o', 'u'];
let consoantes = ['b','c','d','f','g','h','j','l','m','n','p','q','r','s','t','u','v','x','z','w','y','k'];
let total_consoantes = 0;
let  total_vogais = 0;


let NumeroLetras = palavra.length;
for (i = 0; i < palavra.length; i++) {
    if(vogais.indexOf(palavra[i]) >= 0)
    total_vogais++;
else if(consoantes.indexOf(palavra[i]) >= 0)
    total_consoantes++;

}


