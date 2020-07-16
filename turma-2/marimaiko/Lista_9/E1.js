
let rs = require('readline-sync');
var median = require('median');

let arr = [];

for (let i = 1; i < 5; i++) {
    let nota = rs.questionFloat(`Insira sua nota ${i}: `);
    arr.push(nota);
}

var value = median(arr)
 
console.log("O valor da média é: " + value)