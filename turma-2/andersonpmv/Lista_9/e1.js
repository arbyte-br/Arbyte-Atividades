
let md = require('median');
let rs = require('readline-sync');

let nums = [];

for (let cont = 0; cont < 4; cont++) {
    let numero = rs.questionInt('Insira um numero ');
    nums.push(numero);
}
let media = md(nums);

console.log('A média é de', media);
