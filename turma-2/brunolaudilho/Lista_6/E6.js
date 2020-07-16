let readline = require('readline-sync');

let palavra = readline.question('Digite uma palavra ');


let fimAl = palavra.endsWith('al', `${palavra.length}`);

if(fimAl == true){
    console.log(palavra);
}

else { console.log('palavra nao identificada')}
