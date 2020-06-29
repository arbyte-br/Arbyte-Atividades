/* Fazer um programa que leia um valor de DDI e informe o nome do país
Correspondente ao DDI. Por exemplo:
Se lê 1 imprime "Estados Unidos",
Se lê 49 imprime "Alemanha",
Se lê 54 imprime "Argentina",
Se lê 55 imprime "Brasil",
Se lê 35 imprime "Portugal". */

// Variável onde chamamos 'readline-sync'.
var readline = require('readline-sync')

// Variável onde perguntamos o DDI para o usuário.
var ddi = readline.question('Qual seu DDI? ')

// Condição, caso o valor da variável 'ddi' seja 1, iremos imprimir no console: 'Este DDI é dos Estados Unidos'.
if (ddi == 1) {
    console.log(ddi, 'Este DDI é dos Estados Unidos')
}
// Condição, caso o valor da variável 'ddi' seja 49, iremos imprimir no console: 'Este DDI é da Alemanha'.
else if (ddi == 49) {
    console.log(ddi, 'Este DDI é da Alemanha')
}
// Condição, caso o valor da variável 'ddi' seja 54, iremos imprimir no console: 'Este DDI é da Argentina'.
else if (ddi == 54) {
    console.log(ddi, 'Este DDI é da Argentina')
}
// Condição, caso o valor da variável 'ddi' seja 55, iremos imprimir no console: 'Este DDI é do Brasil'.
else if (ddi == 55) {
    console.log(ddi, 'Este DDI é do Brasil')
}
// Condição, caso o valor da variável 'ddi' seja 35, iremos imprimir no console: 'Este DDI é de Portugal'.
else if (ddi == 35) {
    console.log(ddi, 'Este DDI é de Portugal')
}
// Caso o valor da variável 'ddi' seja diferente de qualquer das condições acima, iremos imprimir no console: 'DDI não cadastrado!'.
else {
    console.log('DDI não cadastrado!')
}
