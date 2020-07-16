/* Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.
Exemplo de tela de saída: */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável que irá manter o nosso while. Iniciaremos ela com 'true'
var continuar = true
// Variável onde iremos armazenar nosso resultado fatorial.
var resultado = 1

// Primeiro iremos criar um loop para que o usuário fique nele enquanto a condição for verdadeira, assim garantimos que ele continue fazendo fatorial enquanto digitar 1.
// Condição, enquanto a variável 'continuar' for igual (==) a 'true', então:
while (continuar == true) {
    //Criamos uma variável onde pedimos para o usuário inserir um número.
    var numero = readline.questionInt('Insira um número ')
    // Iniciamos nosso loop com a variável 'i' igual (=) a 1, logo após dizemos que enquanto a variável 'i' for menor ou igual (<=) a variável 'numero', nós incrementamos mais um (i++) e, então:
    for (i = 1 ; i <= numero; i++) {
        // Chamamos a variável resultado e armazenamos nela o valor da variável 'resultado' multiplicada (*) pela variável 'i', até que o loop se encerre.
        resultado = resultado * i
    } 

    // Após o loop ser encerrado basta imprimir a variável 'resultado' no console, pois ela contém o resultado fatorial.
    console.log(resultado)

    // Após isso, criamos a variável 'pergunta' nela perguntamos se o usuário deseja calcular um novo fatorial ou sair. Sendo que 1 = continua e 0 = sai.
    var pergunta = readline.questionInt('0 - Para sair\n 1 - Para continuar')  
    // Condição, se (IF) a variável 'pergunta' for igual (==) a 1, então:
    if(pergunta == 1) {
        // Chamamos a variável continua e setamos o valor dela novamente para 'true' assim o usuário volta para o começo do loop.
       continua = true
       // Chamamos também a variável 'resultado' e setamos o valor dela para o inicial 1, assim resetamos qualquer cálculo feito anteriormente.
       resultado = 1
    } 
    // Se não (else), então:
    else {
        // Chamamos a variável continuar e setamos o valor dela para false, assim o usuário sai do loop e o programa é finalizado.
        continuar = false
    }
}
