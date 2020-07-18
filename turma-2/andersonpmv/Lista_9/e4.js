
let primo = require('prime-number');
let rs = require('readline-sync');

let num = rs.questionInt('Insira um numero ');

console.log(primo(num));
