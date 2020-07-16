let rs = require('readline-sync');

let median = require('median');

let notas = [];

for(let i =1; i<5; i++){
    let question = rs.questionFloat(`informe a nota ${i}: `);
    notas.push(question)
}

let media = median(notas);

console.log(`A média das Notas é: ${media}`);