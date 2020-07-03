let rs = require('readline-sync');


let palavra = rs.question('escreva uma palavra: ');

let i = 0;
let consoantes = [];
let vogais = [];

for(i; i < palavra.length; i++){
    
    if(palavra[i]  === 'a' || palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u'){
        vogais.push(palavra[i]);
    }else {
        consoantes.push(palavra[i]);
    }
}

console.log(`vogais: ${vogais}`);
console.log(`consoantes: ${consoantes}`);