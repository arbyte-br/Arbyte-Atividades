// (OBRIGATÓRIO) Escreva um programa que passe por todos os números de 1 a 50 e
// para cada um deles imprima na tela se o número é par ou ímpar. Caso o número
// também seja primo, o programa deve dizer que ele é primo. (um número primo é um
// número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode
// precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de
// um loop.EX.:
// 1 ÍMPAR PRIMO
// 2 PAR PRIMO
// 3 ÍMPAR PRIMO
// 4 PAR
// 5 ÍMPAR PRIMO
// 6 PAR
// 7 ÍMPAR PRIMO
// 8 PAR
// 9 ÍMPAR
// 10 PAR
// …
let i = 1
let limite = 50
while (i <= limite){
    let j = 2
    let primo = true
    while (j < i){
        if(i % j == 0){
            primo = false
        }
        break
     j++
    }
    if (i % 2 == 0){
        if(primo){
        console.log(i, 'PAR PRIMO')
        }else{
            console.log(i, 'PAR')
        }
    }else if (primo){
        console.log(i, 'ÍMPAR PRIMO')
    }else{
        console.log(i, 'ÍMPAR')
    }
    i++
}