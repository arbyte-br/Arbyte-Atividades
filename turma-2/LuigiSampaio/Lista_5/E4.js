let rs = require('readline-sync');


let nome = rs.question('nome do aluno: ');

for(let i = cont = 0; cont <=5; i++){

    let notaA = rs.questionInt('informe a Nota A: ') * 0.03;
    let notaB = rs.questionInt('informe a Nota B: ') * 0.07;

    let media = ((notaA + notaB) / 0.1).toFixed(1);

    console.log(`o aluno ${nome} tem media ${media}`);
}