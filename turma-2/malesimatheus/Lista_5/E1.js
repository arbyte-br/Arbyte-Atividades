let rs = require('readline-sync');

let palavra = rs.question('Insira uma palavra: ');

let tamanho = palavra.length;

let palavraFinal = [];

for (let i = 0; i < tamanho; i++) {
    let comp = palavra.charAt(i);
    if (comp == 'a' || comp == 'e' || comp == 'i' || comp == 'o' || comp == 'u'){
        comp = comp.toUpperCase();
        palavraFinal.push(comp);
    } else {
        palavraFinal.push(comp);
    }
}

console.log(palavraFinal.join(''));