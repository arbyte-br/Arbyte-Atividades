/* Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
entre estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
procedimento para uma turma composta por cinco alunos, usando o comando For.
Exemplo de tela de saída:
Entre com o nome do aluno: João da Silva
Entre com o grau A: 5.0
Entre com o grau B: 6.0
O aluno João da Silva tem uma média:5.7 */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Condição, declaramos a variável 'i' igual (=) a 0, depois dizemos que enquanto a variável 'i' for menor ou igual (<=) a 5 (número de alunos que queremos cadastrar),
// Por último incrementamos mais um (i++) a variável 'i'.
for (i = 0; i <= 5; i++){
    // Dentro do loop criamos uma variável chamada 'aluno', nela pedimos ao usuário o nome do aluno.
    var aluno = readline.question('Qual o nome do aluno? ')
    // Criamos a variável 'notaA' e pedimos para o usuário inserir a nota A do aluno e, multiplicamos (*) ela por 3 (O peso dela na média 30%).
    var notaA = readline.questionInt('Qual a nota A? ') * 3
    // Criamos a variável 'notaB' e pedimos para o usuário inserir a nota B do aluno e, multiplicamos (*) ela por 7 (O peso dela na média 70%)
    var notaB = readline.questionInt('Qual a nota B? ') * 7
    // Por fim criamos a variável para fazer o cálculo da média, para isso somamos (+) os valores da variável 'notaA' e 'notaB' depois dividimos (/) por 10.
    var media = (notaA + notaB) / 10
    // Agora basta imprimir as variáveis 'aluno' e 'media' com a mensagem.
    console.log('O aluno', aluno, 'tem uma média:', media)
}