let rs = require('readline-sync');
let median =require('median');

let notas = [4.5, 7 , 1.2 , 8];
let calcularMediana = median(notas);

console.log('A média é: '+ calcularMediana);

