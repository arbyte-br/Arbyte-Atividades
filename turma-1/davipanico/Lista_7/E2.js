/*  (OBRIGATÓRIO) ​Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico Verdadeiro
 caso o valor seja primo e Falso em caso contrário. Solicite ao usuário o número e no final imprima se é primo ou não
  utilizando a função na condição IF.
*/

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')
// Variável onde pedimos para o usuário inseir um número (maior que 1, pois já sabemos que 1 é primo).
var numero = readline.questionInt('Insira um número maior que 1: ')
// Condição, enquanto (while) for menor ou igual (<=) a 1, então:
while(numero <= 1) {
    // Pedimos novamente que o usuário insira um número maior que 1, assim garantimos que o número inserido é positivo e maior que 1.
    var numero = readline.questionInt('Insira um número maior que 1! ')
}

// Agora criamos nossa função com o nome de 'ePrimo' e passamos o parâmetro como a variável 'numero'.
function ePrimo (numero) {
    // Dentro da nossa função criamos uma variável 'totalDivisores' nelas iremos armazenar quantos divisores possui nosso número.
    // Lembrando que um número primi só é divisível por 1 e ele mesmo, então se o total de divisores for 2, sabemos que o número é primo.
    var totalDivisores = 0
    // Condição, aqui fazemos um for iniciando o 'i' igual (=) a 0, enquanto 'i' for menor ou igual (<=) que a variável numero, acrescente mais um a 'i' (i++).
    for(i = 0; i <= numero; i++){
        // Condição, se (IF) a variável 'numero' módulo (%) a variável 'i' for igual (==) a 0, então:
        if(numero % i == 0 ) {
            // Adicionamos um para a variável 'totalDivisores' (totalDivisores++).
            totalDivisores++
        }
    }
    // Após sair do loop, temos a seguinte condição, se (IF) a variável 'totalDivisores' for igual (==) a 2, então:
    if(totalDivisores == 2) {
        // O retorno da função será 'true', pois o número é primo.
        return true
    }
    // Senão:
    else {
        // O retorno da função será 'false', pois o número não é primo.
        return false
    }
}

// Agora basta imprimir a função 'ePrimo' passando como parâmetro a variável 'numero'.
console.log(ePrimo(numero))

 