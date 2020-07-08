let rs = require('readline-sync');
let palavra = rs.question('insira uma palavra: ').toLowerCase();
let resultado = '';
for(let contador = 0; contador <= palavra.length; contador++) {
    let letra = palavra.charAt(contador);
    switch(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        case true:
            letra = letra.toUpperCase();
        default:
            break;
    }
    resultado = resultado + letra;
}
console.log(resultado);