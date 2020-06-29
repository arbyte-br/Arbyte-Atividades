/* Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir
qual é a menor idade. */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde definimos o inicio do nosso contador que sera utilizado como condição para o while.
var contador = 1
// Variável onde iremos armazenar a menor idade inserida (Vamos começar com 200 porque ninguem vive mais de 200 anos :D)
var idade = 200

// Condição, enquanto a variável 'contador' for menor ou igual (<=) a 8, faremos o seguinte:
while (contador <= 8) {
    // Primeiro pedimos para o usuário inserir uma idade e, iremos armazenar na variável pergunta.
    var pergunta = readline.questionInt('Insira uma idade ')
    // Se (IF) a variável 'pergunta' for menor que a variável 'idade' então:
    if (pergunta < idade ) {
        // Chamamos a variável 'idade' e substituimos o valor dela pelo valor da variável 'pergunta'.
        idade = pergunta
    }
    // Por último incrementamos + 1 a variável de 'contador', caso o IF não seja atendido, apenas iremos incrementar.
    contador++
}

// Para finalizar, imprimimos no console a variável 'idade' onde vai estar a menor idade inserida pelo usuário.
console.log('A menor idade inseridade foi', idade)