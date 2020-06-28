let readlineSync = require('readline-sync');
for(let i = 0; i < 5; i++){
    let nome = readlineSync.question('Digite o nome do aluno: ');
    let notaA = readlineSync.questionInt('Insira a primeira nota: ');
    let notaB = readlineSync.questionInt('Insira a segunda nota: ');
    let mediaPonderada = ((30*notaA)/100)+((70*notaB)/100);
    console.log(`O aluno(a) ${nome} obteve a média ${mediaPonderada}.`);
}