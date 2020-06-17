/* Tendo como entrada a altura e o sexo codificado da seguinte forma:

Valor 1 para feminino
Valor 2 para masculino
de uma pessoa, construa um programa que calcule e imprima o valor de peso sugerido,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7 */

// Variável para chamar o 'readline-sync'
var readline = require('readline-sync');

// Variável onde vamos perguntar o sexo do usuário.
var sexo = readline.question('Qual o seu sexo? Masculino ou Feminino? : ')

// Variável onde vamos perguntar a altura do usuário.
var altura = readline.question('Qual sua altura? : ')

// Condição, aqui vemos se a variável 'sexo' é igual (==) a 'Masculino', se sim, vamos imprimir:
// 'IMC: ' e, o cálculo da base masculina onde fica 72.7 vezes (*) a váriável 'altura' menos (-) 58.
// Caso a variável 'sexo' não seja igual a 'Masculino', pulamos para o else-if com outra condição.
// Condição, aqui vemos se a variável 'sexo' é igual (==) a 'Feminino', se sim, vamos imprimir:
// 'IMC: ' e, o cálculo da base feminina onde fica 62.1 vezes (*) a variável 'altura' menos (-) 44.7.
// Caso a variável 'sexo' não seja nem 'Masculino' ou 'Feminino', imprimimos: 'Sexo não encontrado'
if (sexo == 'Masculino') {
    console.log('IMC: ', 72.7 * altura - 58)
}
else if (sexo == 'Feminino') {
    console.log('IMC: ', 62.1 * altura - 44.7)
}
else {
    console.log('Sexo não encontrado')
}