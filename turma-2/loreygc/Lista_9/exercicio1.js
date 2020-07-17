let rs = rs.require('readline-sync');
let media = require ('median');

let notas = [];
let x = 0;

for (x; x < 4; x++){
   notas.push(rs.questionFloat('Insira as notas: '))
}

let value = media(notas);
console.log(value); 