let rs = require('readline-sync');

for (let i = 0; i < 5; i++) {
    let nome = rs.question('Insira o nome do aluno: ');
    let n1 = Number(rs.question('Insira a nota A: '));
    let n2 = Number(rs.question('Insira a nota B: '));
    let media = 0.3 * n1 + 0.7 * n2;
    console.log('O aluno ' + nome + ' tem uma media = ' + media.toFixed(1));
}