let user = require('readline-sync');

let palavra = user.question('Insira uma palavra: \n');
let resultado= '';

for (let i = 0; i < palavra.length; i++) {
    
    if(palavra[i] === 'b' || palavra[i] === 'p') {
            resultado = palavra[i-1] === 'm' ? 'Palavra correta' : 'Há erro';
    }
}

console.log(palavra)