let rs = require('readline-sync');

let palavra = rs.question('Digite uma palavra: ');
let i = 0

for(i; i < palavra.length; i++) {
    let letra = palavra.charAt(i);
    if (letra.match(/^([a,e,i,o,u]).*/) != null) {
        palavra = palavra.replace(letra, letra.toUpperCase());
    }
}

    
console.log(palavra)

//outra maneira
let palavra = 'teste';

console.log(palavra.replace(/(a|e|i|o|u)/gi, vogal => vogal.toUpperCase()))