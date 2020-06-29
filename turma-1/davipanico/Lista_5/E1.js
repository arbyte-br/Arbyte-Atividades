/* Faça um algoritmo que receba uma palavra do usuário e caso encontre a letra a
transforme ela em maiúscula
EX: abelha
O algoritmo imprime
AbelhA */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos ao usuário uma palavra.
var palavra = readline.question("Digite uma palavra: ")
// Variável onde iremos armazenar a palavra com letras maiúsculas.
var palavraFinal = ""

// Condição, aqui definimos nossa variável 'I' igual (=) a 0, logo após dizemos que enquanto a variável 'i' for menor que a variável 'palavra'.lenght (tamanho) ela rode o código e por fim incremete +1 a variável 'i' (i++).
for(i = 0; i < palavra.length; i++){
    // Ao entrar no loop, criamos uma nova variável chamada 'letra', nela iremos armazenar a letra do índice (i) atual.
    letra = palavra.charAt(i)
    
    // Condição, se (IF) a variável 'letra' for igual a 'a', então:
    if(letra == "a") {
        // Vamos chamar a variável 'palavraFinal' e, armazenar dentro dela o valor da variável 'palavraFinal' mais (+) a variável letra.toUpperCase() (Função que transforma o valor em letra maiúscula).
        palavraFinal = palavraFinal + letra.toUpperCase()
    }
    // Se não (else), chamamos a variável 'palavraFinal' e armazenamos nela a soma das variáveis 'palavraFinal' mais (+) a variável 'letra', sem utilizar a função toUpperCase().
    else {
        palavraFinal = palavraFinal + letra
    }
}
// Após sairmos do loop basta imprimir o valor da variável 'palavraFinal'.
console.log(palavraFinal)