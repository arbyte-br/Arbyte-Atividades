const rs = require('readline-sync');
const mn = require('median');

let notas = [];

for(let i =1; i<5; i++){
    let question = rs.questionFloat(`informe a nota ${i}: `);
    notas.push(question)
}

let calcMn = mn(notas);

console.log(`calculo da media: ${calcMn}`);