let user = require('readline-sync');

let palavra = user.question('Insira um palavra: \n');
let vogais = ['a','e','i','o','u'];
let resultado = '';

for(let i = 0; i < vogais.length; i++) {

    let comparar = palavra.indexOf(vogais[i]);
    
    if(comparar > 0) {

        resultado = 'Há vogal'
        break;
    }
    else {
        resultado = 'Sem vogal'
    }
}
console.log(resultado)