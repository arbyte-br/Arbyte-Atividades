let readlineSync = require('readline-sync');
for (let i = 0; i < 5; i++) {
    let nome = readlineSync.question('Digite o nome do aluno: ');
    let notaA = readlineSync.questionInt('Insira a nota primaria: ');
    let notaB = readlineSync.questionInt('Insira a nota secundária: ');
    let mediaPonderada = ((30 * notaA) / 100) + ((70 * notaB) / 100);
    console.log(`O aluno ${nome} ficou com a média ${mediaPonderada}.`);
}