/* 13.Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e
a soma dos pares
EX: valores fornecidos 1,2,3,4,5
Impares -> 1 * 3 * 5 = 15
Pares -> 2 + 4 = 6
O programa imprime :
Produtos dos impares : 15
Soma dos pares : 6 */

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync');

// Variável onde vamos definir nosso contador para o loop de while.
var contador = 1;
// Variável onde vamos armazenar a soma dos números pares.
var soma = 0;
// Variável onde iremos armazenar o produto dos números.
var produto = 1;

// Condição, enquanto (while) a variável 'contador' for menor ou igual (<=) a 5 (número de números que vamos pedir ao usuário), faremos o seguinte:
while(contador <= 5){
    // Primeiro criamos uma variável chamada 'numero' onde vamos pedir o número ao usuário.
    var numero = readline.questionInt("Insira um número ");
    // Se (IF) a variável 'numero' módulo (%) 2 for igual (==) a 0, então iremos fazer a soma, pois é par.
    // Chamamos a variável soma e armazenamos nela a soma da variável 'soma' mais (+) 'numero'.
    if(numero % 2 == 0){
        soma = soma+numero;   
    }
    // Se não (else), sabemos que o número é impar então vamos chamar a variável 'produto' e armazenar nela a multiplicação (*) das variáveis 'produto' pela variável 'numero'.
    else{
        produto = produto*numero;
    }
    // Por fim incrementamos + 1 a variável 'contador'.
    contador++;
}
// Depois basta imprimir no console as variáveis 'soma' para a soma de números pares.
console.log("Soma dos pares: " + soma);
// E a variável 'produto' para o produto dos números impares.
console.log("Produto dos impares: " + produto);