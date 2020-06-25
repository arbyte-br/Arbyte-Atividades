// ## Importação de bibliotecas ##
let readlineSync = require('readline-sync'); // Biblioteca para recebimento de dados pelo usuário.

// ## Código ##

let palavra = readlineSync.question('Escreva uma palavra: ');
//let tamanho = palavra.length;
//let y = String('A', 'E', 'I', 'O', 'U');

for (let x=0; x < palavra.length; x++){
    if (palavra.charAt(x) == 'a' || palavra.charAt(x) == 'e' || palavra.charAt(x) == 'i' || palavra.charAt(x) == 'o' || palavra.charAt(x) == 'u'){
        console.log(palavra.charAt(x).toUpperCase());
    } else{
        console.log(palavra.charAt(x));
    }
        
} 
