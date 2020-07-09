let user = require('readline-sync');

let palavra = user.question('Digite uma palavra: \n');
let vogal = 0;
let consoante = 0;

for (let i = 0; i < palavra.length; i++) {
    letra = palavra.charAt(i);
    let vogaisLetra = (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') ? vogal=vogal +1 : consoante=consoante+1;
}
console.log('A palavra'+ palavra +' tem '+ vogal +' vogais e '+ consoante +' consoantes');