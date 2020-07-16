let rs = require('readline-sync');

let palavra = rs.question('Digite qualquer palavra: ');

let vogais = ['a', 'e', 'i', 'o', 'u'];
let qntvogais = 0;
let qntconsoantes = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra.charAt(i);
    if (vogais.indexOf(letra) != -1) {
        qntvogais = qntvogais + 1;
    } else {
        qntconsoantes = qntconsoantes + 1;
    }
}

console.log('Vogais: ' + qntvogais);
console.log('Consoantes ' + qntconsoantes);