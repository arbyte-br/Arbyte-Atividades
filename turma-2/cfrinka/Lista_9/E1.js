let rs = require('readline-sync');
let median = require('median');

let notas = []
let calcMedia = median(notas)

for (let i = 0; i < 4 ; i++){
    let notaInserida = rs.questionInt(` Insira a nota ${i+1}: `);
    notas.push(notaInserida)
}


console.log(`A média desse aluno é: ${calcMedia}`)





