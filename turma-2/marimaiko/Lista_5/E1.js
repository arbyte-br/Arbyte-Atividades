let rs = require('readline-sync');

let palavra = rs.question('Insira uma palavra: ');
let result = '';

for (let i=0; i <= palavra.length; i++) 
{
    let letra = palavra.charAt(i);

    switch (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') 
    {
        case true:
            letra=letra.toUpperCase();

        default:
            break;
    }

    result = result + letra;
}

console.log(result);