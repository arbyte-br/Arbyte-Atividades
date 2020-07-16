let rs = require('readline-sync');

let frase = rs.question('Digite uma frase: ');

if (frase.includes('bosta')) {
    let troca = frase.replace('bosta', 'estrume');
    console.log(troca);
} else {
    console.log(frase);
}