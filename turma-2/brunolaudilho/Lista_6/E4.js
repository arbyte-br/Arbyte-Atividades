let readline = require('readline-sync');

let palavra = readline.question("Digite aqui uma palavra: \n");
let vogais = 0;
let consoantes = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra.charAt(i) == 'a' || palavra.charAt(i) == 'e' || palavra.charAt(i) == 'i' || palavra.charAt(i) == 'o' || palavra.charAt(i) == 'u') {
        vogais = vogais + 1;
    }
    else {
        consoantes = consoantes + 1;
    }
}
console.log(`${vogais} vogais`);
console.log(`${consoantes} consoantes`);



