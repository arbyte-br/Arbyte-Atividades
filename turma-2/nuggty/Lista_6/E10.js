let user = require('readline-sync');

let texto = user.question('Escreva um texto: \n');
 texto = texto.toUpperCase();

 console.log(texto)