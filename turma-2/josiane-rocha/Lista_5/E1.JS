let rs = require('readline-sync');
let palavra = rs.question('Digite uma palavra: ');
var tamanho = palavra.length;

for(let i = 0; i < tamanho; i++) {
    if (palavra.charAt(i) == 'a' || palavra.charAt(i) == 'e' || palavra.charAt(i) == 'i' || palavra.charAt(i) == 'o' || palavra.charAt(i) == 'u') { 
        console.log(palavra.charAt(i).toUpperCase());
    } else{ 
        console.log(palavra.charAt(i));
    }
}