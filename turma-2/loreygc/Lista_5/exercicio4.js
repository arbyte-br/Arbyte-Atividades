let readline = require("readline-sync")

for (i = 0; i <= 5; i++){

    let aluno = readline.question('Qual o nome do aluno? ')

    let nota1 = readline.questionInt('Qual a primeira nota? ') * 3

    let nota2 = readline.questionInt('Qual a segunda nota? ') * 7

    let media = (nota1 + nota2) / 10

    console.log('O aluno', aluno, 'tem uma média:', media)
} 