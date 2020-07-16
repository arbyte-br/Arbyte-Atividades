// Escreva um programa que pedirá para o usuário dois números entre 1
// e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
// imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
// o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
// por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
// programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
// precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
// input do usuário de string para inteiro.

let rs = require('readline-sync');
let numIni = rs.questionInt('Insira um número de 1 a 100: ')
let numFim = rs.questionInt('Insira outro número de 1 a 100: ')

while (numIni <= numFim) {
    if (numIni%7 === 0 && numIni%5 === 0){
        console.log(numIni + ': ]PING PONG')
    } else if (numIni%7 === 0) {
        console.log(numIni + ': PING')
    } else if (numIni%5 === 0) {
        console.log(numIni + ': PONG')
    } else {
        console.log (numIni + ': Não é divisivel por 5 e 7.')
    }
    numIni++
}
