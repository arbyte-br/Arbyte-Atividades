var alunos = 4

for(var i = 0; i<=alunos; i++){
    var nomeAluno = user.question('Qual o nome do aluno? \n>> ')
    var notaA = user.questionFloat('Qual a primeira nota? \n>> ')
    var notaB = user.questionFloat('Qual a segunda nota?\n>> ')
    var notaAFinal = (notaA/100)*30
    var notaBFinal = (notaB/100)*70
    var notaFinal = (notaAFinal+notaBFinal).toFixed(2)
 console.log(`O aluno ${nomeAluno} teve sua nota final com valor ${notaFinal}`)
 }