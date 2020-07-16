//Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada entre estas notas 
//(A tem 30% do peso do grau final e B tem 70% do peso). Repetir este procedimento para uma turma 
//composta por cinco alunos, usando o comando For

let rs = require("readline-sync")
let aluno
let notaA
let notaB
let media

    
for(let i = 1; i<=5; ++i){
    aluno = rs.question ("Qual o seu nome?")
    notaA = rs.questionFloat ("Qual a sua Nota A?")
    notaB = rs.questionFloat ("Qual a sua nota B?")
    media = ((notaA*0.3)+(notaB*0.7))  
    console.log (aluno + " sua media e " + media)
    
}