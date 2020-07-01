let rs = require('readline-sync');
let digite = rs.question('Digite uma palavra: ');
let letras = digite.length;

let resultado = [];

for (let i = 0; i < letras; i++) {
    let letra = digite.charAt(i);
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        letra = letra.toUpperCase();
        resultado.push(letra);
    } else {
        resultado.push(letra);
    }
}

console.log(resultado.join(''));

