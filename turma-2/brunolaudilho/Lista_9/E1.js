let readline = require('readline-sync');
let media = require ('median');

let notas = [];
let x = 0;

for (x; x < 4; x++){
   notas.push(readline.questionFloat('Insira as notas: '))
}
 
let value = media(notas);
console.log(value);