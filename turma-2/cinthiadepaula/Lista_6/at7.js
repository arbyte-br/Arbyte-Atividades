let rs = require('readline-sync');

let palavra = rs.question('Digite uma palavra ');


let sub = palavra.includes('mb');
let sub2 = palavra.includes('mp');

if(sub == true || sub2 == true){
    console.log(palavra);
}

else { console.log('palavra contem erro')}
