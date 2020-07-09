let median = require('median');
let rs = require('readline-sync');

let notas = [];

for (let contador = 0; contador < 4; contador++) {
    let notasAlunos = rs.questionInt(`Informe a nota ${contador+1}: `);
    notas.push(notasAlunos);
}

let valor = median(notas);

console.log(`A media é ${valor}`);