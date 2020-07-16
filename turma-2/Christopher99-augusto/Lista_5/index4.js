let readline = require("readline-sync")

for (i = 0; i <= 5; i++){

    let aluno = readline.question('Qual o nome do aluno? ')
    
    let notaA = readline.questionInt('Qual a nota A? ') * 3
    
    let notaB = readline.questionInt('Qual a nota B? ') * 7
    
    let media = (notaA + notaB) / 10
    
    console.log('O aluno', aluno, 'tem uma média:', media)
}