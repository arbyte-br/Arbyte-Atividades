let rs = require('readline-sync')

for (let i = 0; i < 5; i++) { 
    let nome = rs.question('Digite o nome do aluno: ')
    let notaA = rs.questionFloat('Digite o valor da nota A: ')
    let notaB = rs.questionFloat('Digite o valor da nota B: ')
    let notaFinal = (notaA*30)/100 + (notaB*70)/100
    console.log(`O aluno ${nome} tem uma média: ${notaFinal}`)
} 