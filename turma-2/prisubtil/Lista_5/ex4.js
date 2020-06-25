/*Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
entre
estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
procedimento para uma turma composta por cinco alunos, usando o comando For.
Exemplo de tela de saída:
Entre com o nome do aluno: João da Silva
Entre com o grau A: 5.0
Entre com o grau B: 6.0
O aluno João da Silva tem uma média:5.7
*/
let readlineSync = require('readline-sync');
for(let i = 0; i < 5; i++){
    let nome = readlineSync.question('Digite o nome do aluno: ');
    let notaA = readlineSync.questionInt('Insira a primeira nota: ');
    let notaB = readlineSync.questionInt('Insira a segunda nota: ');
    let mediaPonderada = ((30*notaA)/100)+((70*notaB)/100);
    console.log(`O aluno(a) ${nome} obteve a média ${mediaPonderada}.`);
}
