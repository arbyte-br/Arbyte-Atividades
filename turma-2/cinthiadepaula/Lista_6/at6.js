let rs = require('readline-sync');

let palavra = rs.question('Digite uma palavra ');


let sub = palavra.endsWith('al', `${palavra.length}`);

if(sub == true){
    console.log(palavra);
}

else { console.log('palavra nao identificada')}

