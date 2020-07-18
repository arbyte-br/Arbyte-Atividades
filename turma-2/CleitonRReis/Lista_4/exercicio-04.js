/*
4. Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
entre
estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
procedimento para uma turma composta por cinco alunos, usando o comando For.
Exemplo de tela de saída:
Entre com o nome do aluno: João da Silva
Entre com o grau A: 5.0
Entre com o grau B: 6.0
O aluno João da Silva tem uma média:5.7
*/

var rs = require('readline-sync');

var nome;

var nota1;

var nota2;

for(var i = 1; i <= 5; i++){
    nome = rs.question('\nInforme o nome do aluno: ');
    nota1 = rs.questionFloat('\nInsira a primeira nota: ');
    nota2 = rs.questionFloat('\nInsira a segunda nota: ');

    var mediaPonderada = ((nota1 * 3) + (nota2 * 7)) / 10;
    
    if(mediaPonderada >= 7){
        console.log(`\nO(a) aluno(a) ${nome} tirou uma média: ${mediaPonderada}. Então foi aprovado!\n`)
    }else{
        console.log(`\nO(a) aluno(a) ${nome} tirou uma média: ${mediaPonderada}. Então foi reprovado!\n`);
    }
}