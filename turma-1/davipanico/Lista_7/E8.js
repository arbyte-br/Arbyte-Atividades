/*  Faça uma função que receba um número e retorne se é perfeito ou não. Após isso solicite ao usuário
 para inserir um número e imprimir se é perfeito ou não utilizando a função e imprimindo o resultado no final.
  OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) é igual a ele mesmo Exemplo
   6 possui os seguintes divisores 1 + 2 + 3 = 6 
*/

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde pedimos para o usuário inserir um número.
var numero = readline.questionInt('Insira um número ')

// Aqui criamos a função 'numeroPerfeito' e usamos como parâmetro a variável 'numero'.
function numeroPerfeito (numero) {
    // Dentro da função criamos uma variável chamada 'resultado' onde iremos armazenar a soma dos divisores.
    var resultado = 0

    // Faremos um for, definimos que 'i' é igual a 0 e, enquanto 'i' for menor (<) que a variável 'numero' acrescente mais (i++) 1 a 'i'.
    for(i = 0; i < numero; i++) {
        // Dentro do for, verificamos se a variável 'numero' módulo (%) a variável 'i' é igual (==) a 0, se (IF) sim, então:
        if (numero % i == 0) {
            // Chamamos a variável 'resultado' e somamos (+) ela e a variável 'i'.
            resultado = resultado + i
        }
        // Senão, apenas faça o loop novamente.
    }

    // Por fim vamos validar se a variável 'resultado' possui o mesmo valor da variável 'numero', se sim:
    if (resultado == numero){
        // O retorno da nossa função vai ser true, pois o número é perfeito.
        return true
    }
    else {
        // Senão o retorno da nossa função vai ser false, pois o número não é perfeito.
        return false
    }
}

// Agora basta imprimir a função passando o parâmetro 'numero'.
console.log(numeroPerfeito(numero))
 