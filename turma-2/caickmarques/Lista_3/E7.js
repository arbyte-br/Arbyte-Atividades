let readline = require('readline-sync');

let base = readline.questionInt('Insira a base da potencia: ');
let expoente = readline.questionInt('Insira a expoente da potencia: ');

resultado = Math.pow(base, expoente);

console.log(resultado);