/* Faça um programa que pergunte ao usuário escolher duas opções A e B.
A encerra o programa, B é pra fazer uma soma.
a. Se o usuário inserir A o programa fecha
b. Se o usuário inserir B o programa vai realizar uma operação de soma,
solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o
segundo número o algoritmo deve apresentar a soma e também pergunta se
quer realizar outro cálculo.
c. Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer
que não entendeu o comando e solicitar novamente para inserir A ou B */

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde pedimos para o usuário inserir A ou B
var pergunta = readline.question('Insira A ou B')

// Condição, enquanto (while) a variável 'pergunta' for diferente (!=) de A e B, iremos chamar a variável 'perguntar' e pedir para que ele insira A ou B.
while (pergunta != 'A' && pergunta != 'B') {
    pergunta = readline.question('Não entendi o comando, insira A ou B')
 }

// Condição, enquanto (while) a variável 'pergunta' for igual a 'B' imprimimos 'Vamos fazer uma soma'.
// Depois criamos duas variáveis chamadas 'numero1' e 'numero2' onde pedimos dois números ao usuário e imprimimos 'O resultado é' 'numero1' + 'numero2'.
while (pergunta == 'B') {
    console.log('Vamos fazer uma soma')
    var numero1 = readline.questionInt('Qual o primeiro número? ')
    var numero2 = readline.questionInt('Qual o segundo número?')
    console.log('O resultado é ', numero1 + numero2)

    // Por fim chamamos a variável 'pergunta' e perguntamos se o usuário deseja fazer outra soma, ele deve responder B para sim e A para não, caso ele responda diferente
    pergunta = readline.question('Deseja realizar outra soma? Insira B pra sim e A para não')
    // Colocamos o primeiro while que fizemos novamente, assim validamos que ele fique preso até escrever A ou B.
    while (pergunta != 'A' && pergunta != 'B') {
        pergunta = readline.question('Não entendi o comando, insira A ou B')
     }
}
// Se o usuário colocar A iremos para o fim do código e imprimimos 'Programa encerrado'
console.log('Programa encerrado')