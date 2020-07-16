let rs = require('readline-sync');

let palavra = rs.question('escreva uma palavra: ');

let contador = 0;
let consoantes = [];
let vogais = [];

for (contador; contador < palavra.length; contador++) {

    if (palavra[contador] === 'a' || palavra[contador] === 'e' || palavra[contador] === 'i' || palavra[contador] === 'o' || palavra[contador] === 'u') {
        vogais.push(palavra[contador]);
    } else {
        consoantes.push(palavra[contador]);
    }
}

console.log(`${vogais.length} vogais`);
console.log(`${consoantes.length} consoantes`);