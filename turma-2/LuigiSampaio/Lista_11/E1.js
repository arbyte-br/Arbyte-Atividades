const rs = require('readline-sync');
const mn = require('median');

let notas = [];

for(let i =0; i<4; i++){
    let question = rs.questionFloat('informe a nota: ');
    notas.push(question)
}

let calcMn = mn(notas);

console.log(`calculo da media: ${calcMn}`);