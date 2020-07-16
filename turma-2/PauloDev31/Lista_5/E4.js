let rs = require('readline-sync')
for(let i = 0; i<5; i++){
let dadosAluno = new Object
dadosAluno.nome = rs.question('Entre com o nome do aluno : ')
dadosAluno.notaUm = rs.questionInt('Entre com a primeira nota: ')
dadosAluno.notaDois = rs.questionInt('Entre com a segunda nota do aluno: ')

let porcentagemNotaUm = dadosAluno.notaUm * 0.3
let porcentamNotaDois = dadosAluno.notaDois * 0.7

let notaFinal = porcentagemNotaUm + porcentamNotaDois

console.log(`O aluno ${dadosAluno.nome} tem uma média de ${notaFinal}`)
}