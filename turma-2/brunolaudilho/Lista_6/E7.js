let readline = require('readline-sync');

let palavra = readline.question('Digite uma palavra: ');


let MB = palavra.includes('mb');
let MP = palavra.includes('mp');

if(MB == true || MP == true){
    console.log(palavra);
}

else { console.log('palavra contem erro')}
