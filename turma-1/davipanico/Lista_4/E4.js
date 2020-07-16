/* (OBRIGATÓRIO) Escreva um programa que calcule a soma de todos os múltiplos de 3
e de 5 entre 1 e 1000. */

// Variável onde definimos nosso contador para utilizar no while.
var contador = 0
// Variável onde iremos armazenar a soma dos múltiplos de 3 e 5.
var multiplos = 0

// Condição, enquanto a variável 'contador' for menor (<) que 1000, então:
while (contador < 1000) {
    // Condição, se (IF) a variável 'contador' módulo (%) 3 for igual (==) a 0 ou módulo (%) 5 for igual (==) a 0, então:
    if (contador % 3 == 0 || contador % 5 == 0){
        // Chamamos a variável 'multiplos' e armazenamos nela a soma da variável 'contador' com a variável 'multiplos'.
        multiplos = contador + multiplos
    }
    // Por fim incrementamos mais (++) um a variável 'contador'.
    contador++
}

// Basta imprimir agora a variável 'multiplos', pois nela está armazenada a soma de todos os múltiplos de 3 e 5.
console.log(multiplos)
