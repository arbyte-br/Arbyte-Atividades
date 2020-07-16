let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra: ')
let palavraModificada = ""

for(let contador = 0; contador < palavra.length;contador++) {
    let letraAtual = palavra.charAt(contador).toLowerCase();
    if ( letraAtual === "a" || letraAtual === 'e' || letraAtual ==='i' || letraAtual ==='o' || letraAtual === 'u') {
        palavraModificada+= letraAtual.toUpperCase();
    } else {
        palavraModificada+= letraAtual;
    }
}
console.log(palavraModificada)