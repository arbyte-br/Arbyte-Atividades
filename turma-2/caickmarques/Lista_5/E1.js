let readline = require('readline-sync');

let palavra = readline.question('Digite qualquer palavra: ');
let result = '';

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra.charAt(i);

    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        letra = letra.toUpperCase();
        result = result + letra;
    } else {
        result = result + letra;
    }
}

console.log(result);