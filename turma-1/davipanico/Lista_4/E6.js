/* Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima na
tela (EX.: “O nome digitado foi: Robson”.). O programa deve ser interrompido quando o
usuário digitar o nome “Final”. No final, o programa deve imprimir o número de usuários
que foram cadastrados no total. */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')
// Variável onde iremos armazenar a quantidade de usuários cadastrados pelo usuário.
var quantidade = 0

// Condição, enquanto (while) verdadeiro (true, o código sempre inicia em true), então:
while(true) {
    // Criamos uma variável chamada 'nome' e nela pedimos para o usuário inserir um nome.
    var nome = readline.question('Digite o nome ')
    // Condição, se (if) o valor da variável 'nome' for igual a 'Final' então:
    if(nome == 'Final') {
        // Imprimimos: 'O total de usuários cadastrados foi de', e, a variável 'quantidade.
        console.log('O total de usuários cadastrados foi de', quantidade)
        // Por fim damos um break para sair do loop.
        break
    }
    // Caso não entre na condição de if, então pedimos ao usuário para inserir a idade da pessoal e, armazenamos na variável 'idade'.
    var idade = readline.questionInt('Digite a idade ')
    // Por fim imprimimos as variáveis 'nome' e 'idade'.
    console.log('O nome digitado foi', nome, 'A idade é ', idade)

    // Aqui incrementamos mais (++) um a variável 'quantidade', pois cadastramos mais um usuário.
    quantidade++
}