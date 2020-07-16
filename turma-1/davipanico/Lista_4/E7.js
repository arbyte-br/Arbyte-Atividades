/* Escreva um programa que apresente quatro opções:
(a) consulta saldo, (b) saque e (c) depósito e (d) sair.
O saldo deve iniciar em R$ 0,00.
A cada saque ou depósito o valor do saldo deve ser atualizado.
Caso o usuário tente sacar mais do que possui em conta, trazer uma mensagem de erro
e retornar à tela de opções */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde definimos nossa tela de menu, aqui definirei ela como 'e'
var tela = 'e'
// Variável onde iremos armazenar o saldo da conta bancária do usuário.
var saldo = 0

// Condição, enquanto (while) a variável 'tela' for igual (==) a 'e' então:
while (tela == 'e') {
    // Chamamos a variável 'tela' só que dessa vez perguntando o que o usuário deseja fazer, sendo que 'a' ele consulta o saldo, 'b' saca, 'c' deposita e 'd' sai do programa.
    var tela = readline.question('(a) Consultar saldo\n(b) Saque\n(c) Deposito\n(d) Sair')

    // Condição, enquanto a variável 'tela' for igual (==) a 'a', então:
    while(tela == 'a') {
        // Imprimimos a variável 'saldo' para informar o saldo atual do usuário.
        console.log('O seu saldo atual é de R$ ', saldo)
        // Por fim trocamos o valor da variável tela para 'e', assim ele retornará ao menu.
        tela = 'e'
    }

    // Condição, enquanto a variável 'tela' for igual (==) a 'b', então:
    while(tela == 'b'){
        // Criamos uma nova variável chamada de 'valorSaque' e perguntamos quanto o usuário deseja depositar.
        var valorSaque = readline.questionInt('Quanto você deseja sacar? ')
        // Condição, se (IF) a variável 'valorSaque' for maior (>) que a variável 'saldo', então:
        if(valorSaque > saldo){
            // Imprimimos na tela que o usuário nao possui saldo suficiente.
            console.log('Você não possui saldo suficiente.')
            // Por fim trocamos o valor da variável 'tela' para 'e', assim o usuário retornará para o menu.
            tela = 'e'
        }
        // Se não (else):
        else {
            // Atualizaremos o valor da variável saldo com a soma das variáveis 'saldo' + 'valorSaque'.
            saldo = saldo - valorSaque
            // Imprimimos que o dinheiro foi sacado com sucesso.
            console.log('Dinheiro sacado com sucesso')
            // Por fim, trocamos o valor da variável 'tela' para 'e', assim o usuário retornará para o menu.
            tela = 'e'
        }
    }

    // Condição, enquanto (while) a variável 'tela' for igual 'c', então:
    while (tela == 'c') {
        // Criamos a variável 'valorDeposito' e, nela pedimos para o usuário o valor que ele deseja depositar.
        var valorDeposito = readline.questionInt('Quanto você deseja depositar? ')
        // Após informar o valor nós alteramos o valor da variável 'saldo' para a soma das variáveis 'saldo' + 'valorDeposito'.
        saldo = saldo + valorDeposito
        // Imprimimos na tela que o valor foi depositado com sucesso.
        console.log('Valor depositado com sucesso')
        // Por fim, trocamos o valor da variável 'tela' para 'e', assim o usuário retornará para o menu.
        tela = 'e'
    }

    // Condição, se (if) a variável 'tela' for igual (==) a 'd', então:    
    if(tela == 'd'){
        // Encerramos o programa com um break.
        break
    }
}

// Imprimimos uma mensagem de despidida.
console.log('Até próxima!')