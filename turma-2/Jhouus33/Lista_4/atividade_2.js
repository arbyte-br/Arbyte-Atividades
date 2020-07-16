// Escreva um programa que passe por todos os números de 1 a 50 e para cada um deles imprima na tela
// se o número é par ou ímpar. Caso o número também seja primo, o programa deve dizer que ele é primo.
// (um número primo é um número que só é divisível por ele mesmo e por 1).
// Dica: Neste exercício você pode precisar de ajuda do operador MÓDULO (%).
// Você também pode precisar criar mais de um loop. 

// EX.:  1 ÍMPAR PRIMO 2 PAR PRIMO 3 ÍMPAR PRIMO 4 PAR 5 ÍMPAR PRIMO 6 PAR 7 ÍMPAR PRIMO 8 PAR 9 ÍMPAR 10 PAR … 


let primos0a50 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
let i = 0 
while (i <= 50) {  
    let numeroAtual = i

    if (primos0a50.includes(i)) {
        console.log(numeroAtual)
        console.log('Primo')
   
    } else if (numeroAtual % 2 !== 0) {
        console.log(numeroAtual)
        console.log('Ímpar')
    } else if (numeroAtual % 2 === 0) {
        console.log(numeroAtual)
        console.log('Par')
    }
    i++
    
}
