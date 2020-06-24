// ## Biblioteca Readline-Sync
let rs = require('readline-sync');
// ## Codigo JS
let usuario = rs.questionInt('Insira um numero ');

let numero = 0;

while(numero <= usuario){ 
    console.log(numero); 
    numero = (numero + 2); 
} 