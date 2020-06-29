/*(OBRIGATÓRIO) Escreva um programa que passe por todos os números de 1 a 50 e
para cada um deles imprima na tela se o número é par ou ímpar. Caso o número
também seja primo, o programa deve dizer que ele é primo. (um número primo é um
número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode
precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de
um loop.*/

// Variável onde definimos o nosso número inicial que será 1.
var numero1 = 1;
// Variável onde definimos o nosso número final que será 50.
var numero2 = 50;

// Condição, enquanto a variável 'numero1' for menor ou igual (<=) a variável 'numero2' faremos o seguinte:
while (numero1 <= numero2) {
    // Primeiro criamos uma variável chamada 'ehPrimo', pois a de começo sabemos que o número é primo.
    var ehPrimo = true;
    // Aqui criamos uma váriavel que será nosso número divisor, iniciaremos ele com 2, pois já sabemos que qualquer número dividido por 1 é ele mesmo.
    var divisor = 2;
    // Condição, enquanto (while) a variável 'divisor' for menor (-) que a variável 'numero1' faremos o seguinte:
    while (divisor < numero1) {
        // Condição, se a variável 'numero1' módulo (%) a variável 'divisor' for igual (==) a 0 saberemos que o número não é primo, então:
        if (numero1 % divisor == 0) {
            // Chamamos a variável 'ehPrimo' e mudamos ela de verdadeira (true) para falsa (false).
            ehPrimo = false;
        }
    //Por fim incrementamos mais (++) 1 a variável 'divisor'
    divisor++
    }

// Condição, se (IF) a variável 'numero1' módulo (%) 2 for igual (==) a 0, então:
if (numero1 % 2 == 0) {
    // Condição, se (IF) a variável 'ehPrimo' for verdadeira (true), então imprimimos: Variável 'numero1', 'é par e é primo'.
    if (ehPrimo) {
        console.log(numero1, 'é par e é primo');
    }
    // Se não (else), imprimimos: Variável 'numero1', 'é par'. 
    else {
        console.log(numero1, 'é par');
    }
} 
// Condição, se a variável 'ehPrimo' for verdadeira (true) (já jábemos que ela não é par pois o if de cima não validou), fazemos o seguinte:
else if(ehPrimo) {
        // Imprimimos: Variável 'numero1', 'É impar e é primo'.
        console.log(numero1, 'é impar e é primo');
}
// Se não (else):
else {
        // Imprimimos: Variável 'numero1', 'é impar'.
        console.log(numero1, 'é impar')
    }
// Por fim incrementamos mais (++) 1 a variável 'numero1'    
numero1++
}