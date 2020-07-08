//Escreva um programa que pedirá para o usuário dois números entre 1
//e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
//imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
//o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
//por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
//programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
//precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
//input do usuário de string para inteiro.\n

let rs = require('readline-sync')

let numero1 = rs.questionInt('Insira um número de 1 a 100: \n')
let numero2 = rs.questionInt(`Insira outro número de ${numero1} a 100: \n`)

while (numero1 < numero2) {
    if (numero1 % 5 === 0 && numero1 % 7 === 0)
    console.log('PING! PONG!') 
else if (numero1 % 7 === 0) {
    console.log('PING!')
} else if (numero1 % 5 === 0) {
    console.log('PONG!')
} else {
    console.log(numero1)
}
numero1++
}
