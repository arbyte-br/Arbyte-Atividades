let rs = require('readline-sync')

let pergunta = rs.question('Digite uma palavra: ')
let perguntaModificada = ""

for(let contador = 0; contador < pergunta.length;contador++) {
    let letraAtual = pergunta.charAt(contador).toLowerCase();
    if ( letraAtual === "a" || letraAtual === 'e' || letraAtual ==='i' || letraAtual ==='o' || letraAtual === 'u') {
        perguntaModificada+= letraAtual.toUpperCase();
    } else {
        perguntaModificada+= letraAtual;
    }
}
console.log(perguntaModificada)