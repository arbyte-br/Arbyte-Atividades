/* Escreva um programa para ler o número de lados de um polígono regular e a medida do
lado (em cm). Calcular e imprimir o seguinte:
− Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
− Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
− Se o número de lados for igual a 5 escrever PENTÁGONO. */

// Variávem onde vamos chamar o 'readline-sync'
var readline = require('readline-sync')

// Variável onde perguntamos quantos lados possui o polígono regular do usuário.
var lados = readline.questionInt('Quantos lados possui o seu poligono regular? : ')

// Variável onde perguntamos quantos cm possui o lado do polígono regular do usuário.
var cm = readline.questionInt('Quantos cm possui o lado do poligono? : ')

// Condição, caso a variável 'lados' for igual (==) a 3, logo temos um triângulo, então iremos imprimir:
// 'Seu triangulo possui' e, aqui fazemos o cálculo da área, pegamos a variável cm e multiplicamos (*) pela variável lados
// por último, escrevemos 'CM de área total!'.
if (lados == '3') {
    console.log('Seu Triangulo possui', cm * lados, 'CM de área total!')
}
// Caso a variável 'lados' for igual (==) a 4, logo temos um quadrado, então iremos imprimir:
// 'Seu quadrado possui' e, aqui fazemos o cálculo da área, pegamos a variável cm e multiplicamos (*) pela variável lados
// por último, escrevemos 'CM de área total!'.
else if (lados == '4') {
    console.log('Seu Quadrado possui', cm * lados, 'CM de área total!')
}
// Caso a variável 'lados' for igual (==) a 5, logo temos um pentágono, então iremos imprimir:
//'Seu quadrado possui' e, aqui fazemos o cálculo da área, pegamos a variável cm e multiplicamos (*) pela variável lados
// por último, escrevemos 'CM de área total!'.
else if (lados == '5') {
    console.log('Seu Pentagono possui', cm * lados, 'CM de área total')
}
// Se nenhuma das condições acima forem atendidas, iremos imprimir: 'Não foi possível calcular, tente novamente'
else {
    console.log('Não foi possível calcular, tente novamente.')
}