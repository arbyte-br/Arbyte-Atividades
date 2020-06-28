let rs = require('readline-sync');
let palavra = rs.question('Insira uma palavra: ');
let tamanho = palavra.length;

let palavraFinal = [];

for (let i = 0; i < tamanho; i++) {
    let letra = palavra.charAt(i);
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        letra = letra.toUpperCase();
        palavraFinal.push(letra);
    } else {
        palavraFinal.push(letra);
    }
}

console.log(palavraFinal.join(''));