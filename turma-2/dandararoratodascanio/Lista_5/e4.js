/*Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
entre
estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
procedimento para uma turma composta por cinco alunos, usando o comando For.
Exemplo de tela de saída:
Entre com o nome do aluno: João da Silva
Entre com o grau A: 5.0
Entre com o grau B: 6.0
O aluno João da Silva tem uma média:5.7 */


let rs = require('readline-sync')

let nomeAluno = rs.question("Digite o nome do aluno: \n")

let nota1 = rs.question("Digite a primeira nota: \n")

let nota2 = rs.question("Digite a segunda nota: \n")

media = ((nota1 + nota2) / 2)

console.log(media)

