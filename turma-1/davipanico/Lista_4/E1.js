/* Escreva um programa que pedirá para o usuário dois números entre 1
e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
precisem fazer uso do recurso “readline.questionInt()” que transforma o conteúdo de um
input do usuário de string para inteiro. */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos para o usuário inserir um número:
var numero1 = readline.questionInt("Escolha o primeiro numero : ")

// Aqui fazemos a primeira validação, assim garantimos que o usuário coloque números entre 1 e 100.
// Condição, enquanto (while) a variável 'numero1' for menor (<) que 1 ou maior (>) que 100k, faremos o seguinte:
while (numero1 < 1 || numero1 > 100) {
    // Primeiro imprimimos que o número não está entre 1 e 100.
    console.log("O numero não está entre 1 e 100")
    // Depois chamamos a variável 'numero1' e pedimos novamente para ele escolher um número.
    numero1 = readline.questionInt("Escolha o primeiro numero : ")
}

// Após sair do loop, criamos a variável 'numero2'.
var numero2 = readline.questionInt("Escolha o segundo numero : ")

// Aqui fazemos a mesma validação da variável 'numero1', nada muda.
while (numero2 < 1 || numero2 > 100) {
    console.log("O numero não está entre 1 e 100")
    var numero1 = readline.questionInt("Escolha o primeiro numero : ")
}

// Agora criamos a variável 'maiorNumero' e nela utilizamos a função nativa do JavaScript 'Math.max' e como parâmetro passamos as variáveis 'numero1' e 'numero2'.
// A função 'Math.max' vai pegar os dois parâmetros e comparar quais deles possuem o maior (max) número e armazenar na variável 'maiorNúmero'.
var maiorNumero = Math.max (numero1, numero2);
// Seguindo a mesma lógica da variável 'maiorNumero', utilizamos a função 'Math.min' que em vez de pegar o maior número irá pegar o menor (min) e armazenar na variável 'menorNumero'.
var menorNumero = Math.min (numero1, numero2)

// Condição, enquanto (while) a variável 'menorNumero' for menor ou igual (<=) a variável 'maiorNumero' faremos o seguinte:
while (menorNumero <= maiorNumero) {
    // Se (IF) a variável 'menorNumero' módulo (%) 7 for igual (==) a 0 e, a variável 'menorNumero' módulo (%) 5 for igual (==) a 0 iremos imprimir: 'PING PONG'.
    if (menorNumero % 7 == 0 && menorNumero % 5 == 0 ) {
        console.log("PING PONG")
    }
    // PONTO IMPORTANTE, utilizamos a prioridade nesse exercício, garantimos primeiro que o número é divisível tanto por 7 quanto por 5, assim podemos seguir para as outras validações.
    // Condição, se (IF) a variável 'menorNumero' módulo (%) 7 for igual (==) a 0, iremos imprimir: 'PING'.
    else if (menorNumero % 7 == 0) {
        console.log("PING")
    }
    // Condição, se (IF) a variável 'menorNuero' módulo (%) 5 for igual (==) a 0, iremos imprimir: 'PONG'.
    else if (menorNumero % 5 == 0) {
        console.log("PONG")
    }
    // Se não (else), iremos apenas imprimir a várivel 'menorNumero'.
    else {
        console.log(menorNumero)
    }
    // Por fim incrementamos mais (++) 1 a variável 'menorNumero'
    menorNumero++
}